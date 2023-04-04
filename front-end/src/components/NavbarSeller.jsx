import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarSeller() {
  const username = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <nav>
        <Link
          to="/seller/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          PEDIDOS
        </Link>

        <h2
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {' '}
          { username.name }
        </h2>

        <Link
          to="/"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => localStorage.removeItem('user') }
        >
          Sair
        </Link>

      </nav>
    </div>
  );
}
