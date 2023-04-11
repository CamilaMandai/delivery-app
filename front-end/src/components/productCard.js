import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/productCard.css';

function ProductCard({ price, name, id, urlImg, cartUpdate }) {
  const [quantity, setQuantity] = useState(0);

  const handleQuantity = ({ target }) => {
    const updateQuantity = +target.value;

    if (updateQuantity <= 0) {
      setQuantity(0);
    }

    setQuantity(updateQuantity);

    cartUpdate({ name, price, id, urlImg, quantity: updateQuantity });
  };

  const handleIncreaseDecreaseBtn = ({ target }) => {
    if (target.name === 'decrease') {
      if (quantity === 0) return;
      setQuantity(quantity - 1);
      cartUpdate({ name, price, id, urlImg, quantity: quantity - 1 });
    }

    if (target.name === 'increase') {
      setQuantity(quantity + 1);
      cartUpdate({ name, price, id, urlImg, quantity: quantity + 1 });
    }
  };

  return (
    <div>
      <div className="product-card">
        <h3
          className="price"
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          {`R$ ${price.replace(/\./, ',')}`}
        </h3>
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ urlImg }
          alt={ name }
          width="150px"
        />
        <h2
          className="nameh2"
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          {name}
        </h2>
        <div className="btn-cart">
          <button
            className="button-max"
            data-testid={ `customer_products__button-card-add-item-${id}` }
            name="increase"
            type="button"
            onClick={ handleIncreaseDecreaseBtn }
          >
            +
          </button>
          <input
            className="input-quantity"
            name="quantity"
            type="text"
            data-testid={ `customer_products__input-card-quantity-${id}` }
            value={ quantity }
            onChange={ handleQuantity }
          />
          <button
            className="button-min"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            name="decrease"
            type="button"
            onClick={ handleIncreaseDecreaseBtn }
          >
            -
          </button>
        </div>
      </div>
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
