import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/navBar.css';

function NavBar({ user }) {
  return (
    <nav className="link-nav">
      <Link
        className="link product"
        data-testid="customer_products__element-navbar-link-products"
        to="/customer/products"
      >
        Produtos
      </Link>
      <Link
        className="link order"
        data-testid="customer_products__element-navbar-link-orders"
        to="/customer/orders"
      >
        Meus Pedidos
      </Link>
      <h2
        className="user"
        data-testid="customer_products__element-navbar-user-full-name"
        name="User"
        type="button"
      >
        {user}
      </h2>
      <Link
        className="link exit"
        data-testid="customer_products__element-navbar-link-logout"
        to="/"
        onClick={ () => localStorage.removeItem('user') }
      >
        Sair
      </Link>
    </nav>
  );
}

NavBar.propTypes = {
  user: PropTypes.string.isRequired,
};

export default NavBar;
