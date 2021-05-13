const express = require('express');
const path = require('path');
const multer = require('multer');
const sharp = require('sharp');
const router = express.Router();

const storage = multer.memoryStorage();
function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images only');
  }
}
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});
const resizeProductImg = async (req, res, next) => {
  if (!req.file) return next();
  req.file.filename = `455x514-${req.file.fieldname}-${Date.now()}${path.extname(req.file.originalname)}`;
  await sharp(req.file.buffer).resize(455, 514).toFile(`uploads/${req.file.filename}`);
  next();
};
router.post('/', upload.single('image-file'), resizeProductImg, async (req, res) => {
  const imageUrl = `uploads/${req.file.filename}`;
  res.send(`/${imageUrl}`);
});

module.exports = router;
