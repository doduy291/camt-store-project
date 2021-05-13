import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../components/Loader';
import { login, register } from '../actions/taikhoanActions';

const LoginRegisterScreens = ({ history, location }) => {
  const [emailLogin, setEmailLogin] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPW, setShowPW] = useState(false);

  const dispatch = useDispatch();
  const taikhoanLogin = useSelector((state) => state.taikhoanLogin);
  const { loading: loadingLogin, error: errorLogin, taikhoanInfo } = taikhoanLogin;
  const taikhoanRegister = useSelector((state) => state.taikhoanRegister);
  const { loading: loadingRegister, error: errorRegister } = taikhoanRegister;
  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (taikhoanInfo) {
      history.push(redirect);
    }
  }, [taikhoanInfo, history, redirect]);
  const submitLoginHandler = (e) => {
    e.preventDefault();
    dispatch(login(emailLogin, passwordLogin));
  };
  const submitRegisterHandler = (e) => {
    e.preventDefault();
    dispatch(register(emailRegister, passwordRegister, confirmPassword));
  };

  return (
    <div className="log-reg-content">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={submitLoginHandler} className="login-form">
              <h3>ĐĂNG NHẬP</h3>

              <div className="form-input">
                <label>EMAIL*</label>
                <input
                  className="input-form"
                  type="text"
                  placeholder="Email..."
                  value={emailLogin}
                  onChange={(e) => setEmailLogin(e.target.value)}
                />
                {errorLogin && errorLogin.email ? <span className="error-mess">{errorLogin.email}</span> : null}
              </div>

              <div className="form-input">
                <label>MẬT KHẨU*</label>
                <input
                  className="input-form"
                  type={showPW ? 'text' : 'password'}
                  placeholder="Mật khẩu..."
                  value={passwordLogin}
                  onChange={(e) => setPasswordLogin(e.target.value)}
                />
                <i
                  className={showPW ? 'fa fa-eye' : 'fa fa-eye-slash'}
                  onClick={() => setShowPW((currentShowPW) => !currentShowPW)}
                ></i>
                {errorLogin && errorLogin.password ? <span className="error-mess">{errorLogin.password}</span> : null}
              </div>

              {loadingLogin ? (
                <Loader />
              ) : (
                <button className="submit-btn" type="submit" style={{ marginTop: 10 }}>
                  ĐĂNG NHẬP
                </button>
              )}
            </form>
          </div>
          <div className="col-md-6">
            <form onSubmit={submitRegisterHandler} className="register-form">
              <h3>ĐĂNG KÝ</h3>
              <div className="form-input">
                <label>EMAIL*</label>
                <input
                  className="input-form"
                  type="text"
                  placeholder="Email..."
                  value={emailRegister}
                  onChange={(e) => setEmailRegister(e.target.value)}
                />
                {errorRegister && errorRegister.email ? (
                  <span className="error-mess">{errorRegister.email}</span>
                ) : null}
              </div>
              <div className="form-input">
                <label>MẬT KHẨU*</label>
                <input
                  className="input-form"
                  type="password"
                  placeholder="Mật khẩu..."
                  value={passwordRegister}
                  onChange={(e) => setPasswordRegister(e.target.value)}
                />
                {errorRegister && errorRegister.password ? (
                  <span className="error-mess">{errorRegister.password}</span>
                ) : null}
              </div>
              <div className="form-input">
                <label>XÁC NHẬN MẬT KHẨU*</label>
                <input
                  className="input-form"
                  type="password"
                  placeholder="Xác nhận mật khẩu..."
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errorRegister && errorRegister.confirmpassword ? (
                  <span className="error-mess">{errorRegister.confirmpassword}</span>
                ) : null}
              </div>
              {loadingRegister ? (
                <Loader />
              ) : (
                <button className="submit-btn" type="submit" style={{ marginTop: 10 }}>
                  ĐĂNG KÝ
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterScreens;
