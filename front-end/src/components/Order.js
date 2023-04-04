import React from 'react';
import PropTypes from 'prop-types';

function Order(props) {
  const { name, price, quantity, handleRemove, index } = props;
  const total = Number(price) * Number(quantity);
  return (
    <tr>
      <td
        data-testid={
          `customer_checkout__element-order-table-item-number-${index}`
        }
      >
        { index }
      </td>
      <td
        data-testid={
          `customer_checkout__element-order-table-name-${index}`
        }
      >
        { name }
      </td>
      <td
        data-testid={
          `customer_checkout__element-order-table-quantity-${index}`
        }
      >
        { quantity }
      </td>
      <td
        data-testid={
          `customer_checkout__element-order-table-unit-price-${index}`
        }
      >
        {price}
      </td>
      <td
        data-testid={
          `customer_checkout__element-order-table-sub-total-${index}`
        }
      >
        {total}
      </td>
      <td
        data-testid={
          `customer_checkout__element-order-table-remove-${index}`
        }
      >
        <button type="button" onClick={ handleRemove }>Remover</button>
      </td>
    </tr>
  );
}

Order.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  handleRemove: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Order;
