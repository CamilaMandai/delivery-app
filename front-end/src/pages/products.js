import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/navBar';
import ProductCard from '../components/productCard';
import { requestProducts, requestValidateToken, setToken } from '../helpers/axios';

function Products() {
  const [products, setProducts] = useState([]);
  const [userName, setUserName] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const { token } = JSON.parse(localStorage.getItem('user')) || '';
      if (!token) return history.push('/');

      const tokenValid = await requestValidateToken({ token });
      if (!tokenValid) return history.push('/');

      const user = JSON.parse(localStorage.getItem('user'));
      const prods = await requestProducts();
      setIsAuthenticated(true);
      setToken(token);
      setUserName(user.name);
      setProducts(prods);
    })();
  }, [history]);

  return (
    (isAuthenticated
      ? (
        <div>
          <NavBar user={ userName } />
          {products.map((e) => (
            <ProductCard
              key={ e.id }
              id={ e.id }
              price={ e.price }
              name={ e.name }
              urlImg={ e.url_image }
            />
          ))}
        </div>
      )
      : <h1>Loading</h1>
    )

  );
}

export default Products;
