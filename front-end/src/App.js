import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Checkout from './pages/Checkout';
import Register from './pages/Register';
import SellerOrders from './pages/SellerOrders';
import Admin from './pages/admin';
import Orders from './pages/orders';
import OrdersDetails from './pages/ordersDetails';
import Login from './pages/login';
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
      <Route path="/admin/manage" component={ Admin } />
      <Route path="/customer/orders" component={ Orders } />
      <Route path="/customer/orders/:id" component={ OrdersDetails } />
      <Route path="/customer/checkout" component={ Checkout } />
    </Switch>
  );
}

export default App;
