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
      const token = localStorage.getItem('user') || '';
      if (!token) return history.push('/');

      // const tokenValid = await requestValidateToken(token);
      // if (!tokenValid) return history.push('/');

      const user = JSON.parse(localStorage.getItem('user'));
      const prods = await requestProducts();
      setIsAuthenticated(true);
      setToken(token);
      setUserName(user.name);
      setProducts(prods);
    })();
  });

  return (
    (isAuthenticated
      ? (
        <div>
          <NavBar user={ userName } />
          {products.map((e) => (
            <ProductCard
              key={ e.id }
              price={ e.price }
              name={ e.name }
              id={ e.id }
              urlImg={ e.urlImg }
            />
          ))}
        </div>
      )
      : <h1>Loading</h1>
    )

  );
}

export default Products;
