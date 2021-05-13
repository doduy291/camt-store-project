import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { getProfileAction, updateProfileAction } from '../../actions/taikhoanActions';
import { TAIKHOAN_PROFILE_UPDATE_RESET } from '../../constants/taikhoanConstants';
import { successUpdateInfoNotice } from '../../utils/notification';

const Info = ({ history }) => {
  const [tenkhachhang, setTenkhachhang] = useState('');
  const [sodienthoai, setSodienthoai] = useState('');
  const [diachi, setDiachi] = useState('');
  const [matkhau, setMatkhau] = useState('');
  const [confirmmatkhau, setConfirmmatkhau] = useState('');

  const dispatch = useDispatch();
  const taikhoanLogin = useSelector((state) => state.taikhoanLogin);
  const { taikhoanInfo } = taikhoanLogin;
  const taikhoanProfile = useSelector((state) => state.taikhoanProfile);
  const { loading: loadingProfile, error: errorProfile, profile } = taikhoanProfile;
  const taikhoanProfileUpdate = useSelector((state) => state.taikhoanProfileUpdate);
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = taikhoanProfileUpdate;

  useEffect(() => {
    if (!taikhoanInfo) history.push('/login');
    if (!profile || !profile.tenkhachhang) {
      dispatch(getProfileAction());
    } else {
      setTenkhachhang(profile.tenkhachhang);
      setSodienthoai(profile.sodienthoai);
      setDiachi(profile.diachi);
    }
    if (successUpdate) {
      successUpdateInfoNotice();
      setMatkhau('');
      setConfirmmatkhau('');
      dispatch({ type: TAIKHOAN_PROFILE_UPDATE_RESET });
      dispatch(getProfileAction());
    }
  }, [dispatch, profile, successUpdate, history, taikhoanInfo]);
  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateProfileAction({ tenkhachhang, sodienthoai, diachi, matkhau, confirmmatkhau }));
  };
  return (
    <>
      {loadingProfile ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Loader />
        </div>
      ) : errorProfile ? (
        <Message severity='error'>{errorProfile}</Message>
      ) : (
        <>
          <h3>Thông tin tài khoản</h3>
          <div className="info-content">
            <form onSubmit={(e) => updateHandler(e)}>
              <div className="form-info">
                <label className="input-label">Tên khách hàng:</label>
                <input
                  type="text"
                  name="tenkhachhang"
                  value={tenkhachhang || ''}
                  placeholder="Tên khách hàng..."
                  onChange={(e) => setTenkhachhang(e.target.value)}
                />
              </div>
              <div className="form-info">
                <label className="input-label">Email:</label>
                <input type="email" name="email" value={profile.email || ''} disabled />
              </div>
              <div className="form-info">
                <label className="input-label">Số điện thoại:</label>
                <input
                  type="text"
                  name="sodienthoai"
                  value={sodienthoai || ''}
                  placeholder="Số điện thoại..."
                  onChange={(e) => setSodienthoai(e.target.value)}
                />
              </div>
              <div className="form-info">
                <label className="input-label">Địa chỉ:</label>
                <input
                  type="text"
                  name="diachi"
                  value={diachi || ''}
                  placeholder="Địa chỉ..."
                  onChange={(e) => setDiachi(e.target.value)}
                />
              </div>
              <div className="form-info">
                <label className="input-label">Mật khẩu mới:</label>
                <input
                  type="password"
                  name="matkhau"
                  value={matkhau}
                  placeholder="Mật khẩu mới..."
                  onChange={(e) => setMatkhau(e.target.value)}
                />
              </div>
              <div className="form-info">
                <label className="input-label">Xác nhận mật khẩu:</label>
                <input
                  type="password"
                  name="repassword"
                  value={confirmmatkhau}
                  placeholder="Xác nhận mật khẩu..."
                  onChange={(e) => setConfirmmatkhau(e.target.value)}
                />
              </div>
              <div className="form-info">
                <label className="input-label"></label>
                {errorUpdate && errorUpdate.confirmmatkhau ? (
                  <span className="error-mess">{errorUpdate.confirmmatkhau}</span>
                ) : null}
              </div>
              <div className="form-info">
                <label className="input-label"></label>
                {loadingUpdate ? <Loader /> : <button type="submit">Cập nhật</button>}
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Info;
