import React from 'react';

function Order(index, order, handleRemove) {
  const { name, price, quantity, id } = order;
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
        <button type="button" onClick={ () => handleRemove(id) }>Remover</button>
      </td>
    </tr>
  );
}

export default Order;
