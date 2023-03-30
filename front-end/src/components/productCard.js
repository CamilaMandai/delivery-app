import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProductCard({ price, name, id, urlImg }) {
  const [quantity, setQuantity] = useState(0);

  const handleIncreaseDecreaseBtn = ({ target }) => {
    if (target.name === 'decrease' && quantity !== 0) {
      setQuantity(quantity - 1);
    }

    if (target.name === 'increase') {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div>
      <h3
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {price.replace(/\./, ',')}
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
        name="increase"
        type="button"
        onClick={ handleIncreaseDecreaseBtn }
      >
        +
      </button>
      <input
        name="quantity"
        type="text"
        data-testid={ `customer_products__input-card-quantity-${id}` }
        value={ quantity }
        readOnly
      />
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        name="decrease"
        type="button"
        onClick={ handleIncreaseDecreaseBtn }
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
