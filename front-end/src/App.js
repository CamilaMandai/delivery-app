import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import CustomerOrder from './components/CustomerOrder';
import Checkout from './pages/Checkout';
import Register from './pages/Register';
import SellerOrders from './pages/SellerOrders';
import Admin from './pages/admin';
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
      <Route path="/customer/checkout" component={ Checkout } />
      <Route path="/customer/orders/:id" component={ CustomerOrder } />
      <Route exact path="/customer/orders" component={ CustomerOrder } />
    </Switch>
  );
}

export default App;
