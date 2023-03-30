import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ price, name, id, urlImg }) {
  return (
    <div>
      <h3
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {`R$ ${price}`}
      </h3>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImg }
        alt={ name }
      />
      <h2
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {name}
      </h2>
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        name="sub"
        type="button"
      >
        -
      </button>
      <p
        data-testid={ ` customer_products__input-card-quantity-${id}` }
      >
        0
      </p>
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        name="sub"
        type="button"
      >
        -
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  price: PropTypes.number,
  name: PropTypes.string,
  id: PropTypes.number,
  urlImg: PropTypes.string,
}.isRequired;

export default ProductCard;
