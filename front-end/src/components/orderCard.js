import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function OrderCard(props) {
  const { id, status, date, price } = props;
  const CUS_PROD = 'customer_products_';
  const ELEM_ORD = '_element-order-';
  const CARD_ORD = '_element-card-price-';
  const DELVI_ORD = '_element-delivery-status-';

  return (
    <section>
      <Link
        to={ `/costumers/orders/${id}` }
      >
        <h2
          data-testid={ `${CUS_PROD}${ELEM_ORD}id-${id}` }
        >
          Pedido
          { id }
        </h2>
        <h1
          data-testid={ `${CUS_PROD}${DELVI_ORD}${id}` }
        >
          { status }
        </h1>
        <h1
          data-testid={ `${CUS_PROD}${ELEM_ORD}date-${id}` }
        >
          { date }
        </h1>
        <h1
          data-testid={ `${CUS_PROD}${CARD_ORD}${id}` }
        >
          { price }
        </h1>
      </Link>
    </section>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default OrderCard;
