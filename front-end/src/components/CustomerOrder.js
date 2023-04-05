import React from 'react';
// import dayjs from 'dayjs';
// import PropTypes from 'prop-types';
import NavBar from './navBar';

function CustomerOrder() {
  const savedUser = JSON.parse(localStorage.getItem('user'));
  // const formatDate = dayjs(order.saleDate).format('DD/MM/YYYY');
  const dataTestId = 'customer_order_details';
  return (
    <div>
      <NavBar user={ savedUser.name } />
      <p>
        {' '}
        PEDIDO
        <span data-testid="customer_order_details__element-order-details-label-order-id">
          {/* { order.id} */}
        </span>
      </p>
      <p>
        {' '}
        P. Venda
        <span
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          {/* { order.sellerId} */}
        </span>
      </p>
      <p>
        {/* {' '}
        {`Data do pedido: ${formatDate}`} */}
        <span
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {/* { order.sellerId} */}
        </span>
      </p>
      <p>
        <span
          data-testid={ `${dataTestId}__element-order-details-label-delivery-status` }
        >
          {/* { `Status: ${order.status}`} */}
        </span>
      </p>
      <p>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
        >
          Marcar como entregue
        </button>
      </p>
    </div>
  );
}

export default CustomerOrder;

// CustomerOrder.propTypes = {
//   order: PropTypes.objectOf(PropTypes.any.isRequired).isRequired,
// };
