import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Products from './pages/products';
import Register from './pages/Register';
import Admin from './pages/admin';
import CustomerOrder from './components/CustomerOrder';

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
      <Route path="/customer/orders" component={ CustomerOrder } />
    </Switch>
  );
}

export default App;
