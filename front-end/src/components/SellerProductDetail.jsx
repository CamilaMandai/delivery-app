import React from 'react';
import PropTypes from 'prop-types';

function SellerProductDetail(props) {
  const { name, price, quantity, index } = props;
  const total = +price * +quantity;
  return (
    <tr>
      <td
        data-testid={
          `seller_order_details__element-order-table-item-number-${index}`
        }
      >
        { index + 1}
      </td>
      <td
        data-testid={
          `seller_order_details__element-order-table-name-${index}`
        }
      >
        { name }
      </td>
      <td
        data-testid={
          `seller_order_details__element-order-table-quantity-${index}`
        }
      >
        { quantity }
      </td>
      <td
        data-testid={
          `seller_order_details__element-order-table-unit-price-${index}`
        }
      >
        {String(price).replace(/\./, ',')}
      </td>
      <td
        data-testid={
          `seller_order_details__element-order-table-sub-total-${index}`
        }
      >
        {String(total.toFixed(2)).replace(/\./, ',')}
      </td>
    </tr>
  );
}

SellerProductDetail.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  handleRemove: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
}.isRequired;

export default SellerProductDetail;
