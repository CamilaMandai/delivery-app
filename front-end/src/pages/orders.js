import React, { useState, useEffect } from 'react';
import NavBar from '../components/navBar';
import { requestSaleByUser } from '../helpers/axios';
import OrderCard from '../components/orderCard';

function Orders() {
  const [order, setOrder] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const requestOrders = async () => {
      const request = await requestSaleByUser(user.id);
      console.log(request);
      setOrders(request);
    };
    requestOrders();
  }, [setOrder]);

  return (
    <main>
      <NavBar />
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
