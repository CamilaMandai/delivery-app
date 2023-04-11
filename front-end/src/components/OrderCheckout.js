import React from 'react';
import PropTypes from 'prop-types';
import '../styles/checkout.css';

function Order(props) {
  const { name, price, quantity, handleRemove, index } = props;
  const total = price * quantity;
  return (
    <tr>
      <td
        className="table-one"
        data-testid={
          `customer_checkout__element-order-table-item-number-${index}`
        }
      >
        { index + 1}
      </td>
      <td
        className="table-two"
        data-testid={
          `customer_checkout__element-order-table-name-${index}`
        }
      >
        { name }
      </td>
      <td
        className="table-three"
        data-testid={
          `customer_checkout__element-order-table-quantity-${index}`
        }
      >
        { quantity }
      </td>
      <td
        className="table-four"
        data-testid={
          `customer_checkout__element-order-table-unit-price-${index}`
        }
      >
        {String(price).replace(/\./, ',')}
      </td>
      <td
        className="table-five"
        data-testid={
          `customer_checkout__element-order-table-sub-total-${index}`
        }
      >
        {String(total.toFixed(2)).replace(/\./, ',')}
      </td>
      <td
        className="table-six"
        data-testid={
          `customer_checkout__element-order-table-remove-${index}`
        }
      >
        <button
          className="table-button"
          type="button"
          onClick={ handleRemove }
        >
          Remover

        </button>
      </td>
    </tr>
  );
}

Order.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  handleRemove: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
}.isRequired;

export default Order;
