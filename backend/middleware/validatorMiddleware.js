const actions = {
  required: ['Không được bỏ trống!'],
  invalidEmail: ['Không đúng định dạng Email!'],
  invalidName: ['Tên không được chứa kí tự đặc biệt!'],
  invalidPhone: ['Không đúng định dạng số điện thoại!'],
  notMatch: ['Không trùng mật khẩu!'],
  lengthPhone: ['Số điện thoại tối đa 10 số!'],
};
const regex = {
  email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  fullnameVN: /^([a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s])+$/,
  phoneVN: /(09|03|07|08|05)+([0-9]{8})/,
};

const checkLogIn = (req, res, next) => {
  // Error, message empty
  let cache = {};
  let error = new Error();

  const { email, password } = req.body;
  if (!email.toLowerCase().match(regex.email)) cache = { ...cache, email: actions['invalidEmail'] };
  if (!email) cache = { ...cache, email: actions['required'] };
  if (!password) cache = { ...cache, password: actions['required'] };

  // Push message cache to error
  error = { ...error, ...cache };

  if (Object.keys(error).length === 0) {
    next();
  } else {
    res.status(401);
    throw error;
  }
};

const checkRegister = (req, res, next) => {
  // Error, message empty
  let cache = {};
  let error = new Error();

  const { email, password, confirmpassword } = req.body;
  if (!email.toLowerCase().match(regex.email)) cache = { ...cache, email: actions['invalidEmail'] };
  if (!email) cache = { ...cache, email: actions['required'] };
  if (!password) cache = { ...cache, password: actions['required'] };
  if (!confirmpassword) cache = { ...cache, confirmpassword: actions['required'] };
  if (password !== confirmpassword) cache = { ...cache, confirmpassword: actions['notMatch'] };

  // Push message cache to error
  error = { ...error, ...cache };

  if (Object.keys(error).length === 0) {
    next();
  } else {
    res.status(401);
    throw error;
  }
};

const checkPlaceOrder = (req, res, next) => {
  // Error, message empty
  let cache = {};
  let error = new Error();

  const { name, phoneNumber, address } = req.body;
  if (phoneNumber.length > 10) cache = { ...cache, phoneNumber: actions['lengthPhone'] };
  if (!phoneNumber.match(regex.phoneVN)) cache = { ...cache, phoneNumber: actions['invalidPhone'] };
  if (!name.match(regex.fullnameVN)) cache = { ...cache, name: actions['invalidName'] };
  if (!phoneNumber) cache = { ...cache, phoneNumber: actions['required'] };
  if (!address) cache = { ...cache, address: actions['required'] };
  if (!name) cache = { ...cache, name: actions['required'] };

  // Push message cache to error
  error = { ...error, ...cache };

  if (Object.keys(error).length === 0) {
    next();
  } else {
    res.status(401);
    throw error;
  }
};

const checkUpdateProfile = (req, res, next) => {
  let cache = {};
  let error = new Error();

  const { matkhau, confirmmatkhau } = req.body;
  if (matkhau && matkhau !== confirmmatkhau) cache = { ...cache, confirmmatkhau: actions['notMatch'] };

  // Push message cache to error
  error = { ...error, ...cache };
  console.log(error);
  if (Object.keys(error).length === 0) {
    next();
  } else {
    res.status(401);
    throw error;
  }
};
module.exports = { checkLogIn, checkRegister, checkPlaceOrder, checkUpdateProfile };
