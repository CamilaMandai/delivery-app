import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Products from './pages/products';
import Register from './pages/Register';
import Admin from './pages/admin';
import Orders from './pages/orders';
import OrdersDetails from './pages/ordersDetails';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ Products } />
      <Route path="/admin/manage" component={ Admin } />
      <Route path="/customer/orders" component={ Orders } />
      <Route path="/customer/orders/:id" component={ OrdersDetails } />
    </Switch>
  );
}

export default App;
