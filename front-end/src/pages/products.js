import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/navBar';
import ProductCard from '../components/productCard';
import { requestProducts, requestValidateToken } from '../helpers/axios';

function Products() {
  const [products, setProducts] = useState([]);
  const [userName, setUserName] = useState('');
  const [cart, setCart] = useState([]);
  const [cartValue, setCartValue] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const { token } = JSON.parse(localStorage.getItem('user'));
      // if (!token) return history.push('/');

      try {
        const tokenValid = await requestValidateToken({ token });
        if (!tokenValid) return history.push('/');

        const user = JSON.parse(localStorage.getItem('user'));
        const prods = await requestProducts();
        setIsAuthenticated(true);
        setUserName(user.name);
        setProducts(prods);
      } catch (error) {
        setIsAuthenticated(false);
        return history.push('/');
      }
    })();
  }, [history]);

  const handleClick = () => {
    localStorage.setItem('cartShop', JSON.stringify(cart));
    localStorage.setItem('cartValue', cartValue);

    history.push('/customer/checkout');
  };

  const cartUpdate = (prod) => {
    if (prod.quantity === 0) {
      const newCart = cart.filter((p) => p.name !== prod.name);
      return setCart(newCart);
    }

    if (cart.some((p) => p.name === prod.name)) {
      const newCart = cart.map((p) => {
        if (p.name === prod.name) return prod;
        return p;
      });
      return setCart(newCart);
    }

    const newCart = [...cart, prod];
    setCart(newCart);
  };

  useEffect(() => {
    const updateCartValue = cart.reduce((acc, curr) => (
      acc + curr.quantity * +curr.price
    ), 0);
    setCartValue(updateCartValue);
  }, [cart]);

  return (
    (isAuthenticated
      ? (
        <div>
          <div>
            <NavBar user={ userName } />
            {products.map((e) => (
              <ProductCard
                key={ e.id }
                id={ e.id }
                price={ e.price }
                name={ e.name }
                urlImg={ e.url_image }
                cartUpdate={ cartUpdate }
              />
            ))}
          </div>
          <div>
            <button
              type="button"
              data-testid="customer_products__button-cart"
              onClick={ handleClick }
              disabled={ cartValue === 0 }
            >
              <h3>Ver Carrinho</h3>
              <h3
                data-testid="customer_products__checkout-bottom-value"
              >
                {(cartValue.toFixed(2)).replace(/\./, ',')}
              </h3>
            </button>
          </div>
        </div>
      )
      : <h1>Loading</h1>
    )

  );
}

export default Products;
