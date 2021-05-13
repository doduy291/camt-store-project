import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreens from './screens/HomeScreens';
import LoginRegisterScreens from './screens/LoginRegisterScreens';
import ShoppingCartScreens from './screens/ShoppingCartScreens';
import SingleproductScreens from './screens/SingleproductScreens';
import TrackorderScreens from './screens/TrackorderScreens';
import WishlistScreens from './screens/WishlistScreens';

import ErrorScreen from './screens/ErrorScreen';
import AboutScreen from './screens/AboutScreen';
import BlogScreen from './screens/BlogScreen';
import ContactScreen from './screens/ContactScreen';
import ShopScreen from './screens/ShopScreen';
import OrderDetailScreen from './screens/OrderDetailScreen';
import ProfileScreen from './screens/Profile/ProfileScreen';
import UploadScreen from './screens/UploadScreen';

const App = () => {
  return (
    <Router>
      <Toaster position="top-right" />
      <Route render={({ location, history }) => <Header location={location} history={history} />} />
      <Switch>
        <Route path="/login" component={LoginRegisterScreens} />
        <Route path="/upload" component={UploadScreen} />
        <Route path="/shoppingcart" component={ShoppingCartScreens} />
        <Route path="/singleproduct/:slug" component={SingleproductScreens} />
        <Route path="/trackorder" component={TrackorderScreens} />
        <Route path="/wishlist" component={WishlistScreens} />
        <Route path="/about" component={AboutScreen} />
        <Route path="/blog" component={BlogScreen} />
        <Route path="/contact" component={ContactScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/shop" component={ShopScreen} exact />
        <Route path="/shop/search/:keyword" component={ShopScreen} exact />
        <Route path="/shop/search/:keyword/page/:pageNumber" component={ShopScreen} exact />
        <Route path="/shop/page/:pageNumber" component={ShopScreen} exact />
        <Route path="/order-detail/:sohoadon" component={OrderDetailScreen} />
        <Route path="/" component={HomeScreens} exact />
        <Route path="*" component={ErrorScreen} />
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
