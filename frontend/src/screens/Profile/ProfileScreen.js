import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Info from './Info';
import Order from './Order';

const ProfileScreen = ({ location, history }) => {
  const dispatch = useDispatch();
  const taikhoanLogin = useSelector((state) => state.taikhoanLogin);
  const { taikhoanInfo } = taikhoanLogin;
  useEffect(() => {
    if (!taikhoanInfo) history.push('/login');
  }, [dispatch, history, taikhoanInfo]);

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="main-content">
            <div className="profile">
              <div className="row">
                <div className="sidebar-menu col-md-3">
                  <Sidebar location={location} />
                </div>
                <div className="profile-content col-md-9">
                  <Switch>
                    <Route path="/profile" component={Info} exact />
                    <Route path="/profile/hoa-don" component={Order} exact />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;
