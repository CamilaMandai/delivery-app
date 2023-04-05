import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavBar({ user }) {
  return (
    <nav>
      <Link
        data-testid="customer_products__element-navbar-link-products"
        to="/customer/products"
      >
        Produtos
      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to="/customer/products"
      >
        Meus Pedidos
      </Link>
      <h2
        data-testid="customer_products__element-navbar-user-full-name"
        name="User"
        type="button"
      >
        {user}
      </h2>
      <Link
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
