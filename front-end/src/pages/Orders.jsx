import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { requestSaleByUser } from '../helpers/axios';
import OrderCard from '../components/OrderCard';

function Orders() {
  const [order, setOrder] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const requestOrders = async () => {
      const request = await requestSaleByUser(user.id);
      console.log(request);
      setOrder(request);
    };
    requestOrders();
  }, [setOrder]);

  return (
    <main>
      <NavBar user={ user.name } />
      {
        order.map((eachOrder) => (
          <OrderCard
            key={ eachOrder.id }
            id={ eachOrder.id }
            status={ eachOrder.status }
            date={ eachOrder.saleDate }
            price={ eachOrder.totalPrice }
          />
        ))
      }
    </main>
  );
}

export default Orders;
