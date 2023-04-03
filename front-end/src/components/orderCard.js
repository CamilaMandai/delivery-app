import React from 'react';
import { Link } from 'react-router-dom';

function orderCard(props) {
  const { id, status, date, price } = props;
  const cusProd = 'customer_products_';
  const elOrdId = '_element-order-';
  const cardOrd = '_element-card-price-';
  const delOrd = '_element-delivery-status-';

  return (
    <section>
      <Link
        to={ `/costumers/orders/${id}` }
      >
        <h2
          data-testid={ `${cusProd}${elOrdId}id-${id}` }
        >
          Pedido
          { id }
        </h2>
        <h1
          data-testid={ `${cusProd}${delOrd}${id}` }
        >
          { status }
        </h1>
        <h1
          data-testid={ `${cusProd}${elOrdId}date-${id}` }
        >
          { date }
        </h1>
        <h1
          data-testid={ `${cusProd}${cardOrd}${id}` }
        >
          { price }
        </h1>
      </Link>
    </section>
  );
}

export default orderCard;
