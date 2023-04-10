import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Checkout from './pages/Checkout';
import Register from './pages/Register';
import SellerOrderDetails from './pages/SellerOrderDetails';
import SellerOrders from './pages/SellerOrders';
import Admin from './pages/admin';
import Login from './pages/login';
import Orders from './pages/orders';
import OrdersDetails from './pages/ordersDetails';
import Products from './pages/products';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ Products } />
      <Route path="/seller/orders" component={ SellerOrders } />
      <Route path="/seller/orders/:id" component={ SellerOrderDetails } />
      <Route path="/admin/manage" component={ Admin } />
      <Route path="/customer/orders" component={ Orders } />
      <Route path="/customer/orders/:id" component={ OrdersDetails } />
      <Route path="/customer/checkout" component={ Checkout } />
      {/* <Route exact path="/customer/orders" component={ CustomerOrder } /> */}
    </Switch>
  );
}

export default App;
