const db = require('../server');
const DBsanpham = db.sanpham;
const DBreview = db.review;
const DBhoadon = db.hoadon;
const DBchitiethoadon = db.chitiethoadon;
const DBmausanpham = db.mausanpham;
const DBsizesanpham = db.sizesanpham;
const Op = db.Sequelize.Op;
const Sequelize = require('sequelize');
const asyncHandler = require('express-async-handler');
const slugify = require('slugify');

// Pagination Sub-function
const getPagination = (page) => {
  const limit = 8;
  const offset = limit * page - limit;
  return { limit, offset };
};

// @route GET api/sanpham/
exports.getAllSanPham = asyncHandler(async (req, res) => {
  const page = Number(req.query.pageNumber) || 1;
  const { limit, offset } = getPagination(page);
  const keyword = req.query.keyword
    ? {
        where: {
          tensanpham: {
            [Op.like]: `%${req.query.keyword}%`,
          },
        },
        group: ['tensanpham'],
      }
    : {
        group: ['tensanpham'],
      };
  const totalsanpham = await DBsanpham.count({
    group: ['tensanpham'],
  });
  const count = await DBsanpham.count({ ...keyword });
  const sanpham = await DBsanpham.findAll({
    ...keyword,
    attributes: {
      exclude: ['anhsanpham'],
    },
    limit,
    offset,
  });

  if (sanpham) {
    res.json({ sanpham, page, totalPages: Math.ceil(count.length / limit), totalsanpham: totalsanpham.length });
  } else {
    res.status(401);
    throw new Error('Lỗi lấy sản phẩm');
  }
});

// @route GET api/sanpham/:slug?size=?&color=?
exports.getDetailSanPham = asyncHandler(async (req, res) => {
  const { color, size, idsp } = req.query;
  const condition = idsp
    ? {
        where: {
          slug: req.params.slug,
          idsanpham: idsp,
        },
      }
    : color && size
    ? {
        where: {
          slug: req.params.slug,
          idmausanpham: color || '',
          idsizesanpham: size || '',
        },
      }
    : {
        where: { slug: req.params.slug },
      };
  const sanpham = await DBsanpham.findOne({
    ...condition,
    attributes: {
      exclude: ['anhsanpham'],
    },
    include: [
      {
        model: DBreview,
        as: 'review',
      },
      {
        model: DBmausanpham,
        as: 'mausanpham',
      },
      {
        model: DBsizesanpham,
        as: 'sizesanpham',
      },
    ],
  });
  if (sanpham) {
    res.json(sanpham);
  } else {
    res.status(401);
    throw new Error('Lỗi lấy chi tiết sản phẩm');
  }
});

// @route POST api/sanpham/review/:id
exports.createSanPhamReview = asyncHandler(async (req, res) => {
  // Error, message empty
  let cache = {};
  let error = new Error();

  const { comment } = req.body;
  const ngaygio = new Date().toLocaleString('sv-SE');
  // const existSanPham = await DBsanpham.findByPk(req.params.id);
  const existPurchased = await DBhoadon.findOne({
    where: {
      idkhachhang: req.user.idkhachhang,
    },
    include: [
      {
        model: DBchitiethoadon,
        as: 'chitiethoadon',
        where: {
          idsanpham: req.params.id,
        },
      },
    ],
  });
  if (existPurchased) {
    const review = new DBreview({
      idsanpham: req.params.id,
      tenkhachhang: req.user.tenkhachhang,
      comment: comment,
      ngayreview: `${ngaygio.split(' ')[0]} ${ngaygio.split(' ')[1]}`,
    });
    await review.save();
    res.status(201).json({ message: 'Review added' });
  } else {
    res.status(404);
    cache = { ...cache, message: 'Chỉ người từng mua sản phẩm này mới có thể viết đánh giá!' };
    error = { ...error, ...cache };
    throw error;
  }
});

// @route GET api/sanpham/relation/:slug
exports.getRelatedSanPham = asyncHandler(async (req, res) => {
  const loaisp = await DBsanpham.findOne({
    where: {
      slug: req.params.slug,
    },
    attributes: ['idloaisanpham'],
  });
  const sanpham = await DBsanpham.findAll({
    where: {
      idloaisanpham: loaisp.idloaisanpham,
    },
    attributes: ['tensanpham', 'anhsanphampath', 'giabanle', 'slug'],
    order: Sequelize.literal('rand()'),
    limit: 4,
  });
  res.json(sanpham);
});

// @route GET api/sanpham/:slug/color
exports.getColorDetailSanPham = asyncHandler(async (req, res) => {
  const dataColor = await DBsanpham.findAll({
    where: {
      slug: req.params.slug,
    },
    attributes: ['idmausanpham'],
    include: [
      {
        model: DBmausanpham,
        as: 'mausanpham',
      },
    ],
    group: ['idmausanpham'],
  });
  res.json(dataColor);
});

// @route GET api/sanpham/:slug/size
exports.getSizeDetailSanPham = asyncHandler(async (req, res) => {
  const dataSize = await DBsanpham.findAll({
    where: {
      slug: req.params.slug,
    },
    attributes: ['idsizesanpham'],
    include: [
      {
        model: DBsizesanpham,
        as: 'sizesanpham',
      },
    ],
    group: ['idsizesanpham'],
  });
  res.json(dataSize);
});

// @route PUT api/sanpham/:id
exports.updateSlugTenSanPham = asyncHandler(async (req, res) => {
  const sanpham = await DBsanpham.findOne({
    where: {
      idsanpham: req.params.id,
    },
  });
  sanpham.slug = slugify(sanpham.tensanpham, {
    lower: true,
  });
  const updated = await sanpham.save();
  res.json(updated.slug);
});

//@route GET api/sanpham/trend
exports.getSanPhamTrend = asyncHandler(async (req, res) => {
  const chitiethoadon = await DBchitiethoadon.findAll({
    attributes: ['idsanpham', [Sequelize.fn('sum', Sequelize.col('soluong')), 'total_soluong']],
    include: [
      {
        model: DBsanpham,
        as: 'sanpham',
      },
    ],
    limit: 4,
    order: Sequelize.literal('rand()'),
    group: ['idsanpham'],
  });
  res.json(chitiethoadon);
});
