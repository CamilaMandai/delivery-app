import React, { useState, useEffect } from 'react';
import NavBar from '../components/navBar';
import { requestOrders } from '../helpers/axios';
import orderCard from '../components/orderCard';

function Orders() {
  const [order, setOrder] = useState([]);

  const getAllOrders = async () => {
    const data = await requestOrders();
    setOrder(data);
  };

  useEffect(() => getAllOrders());

  return (
    <main>
      <NavBar />
      {
        order && order.map((eachOrder) => (
          <orderCard
            key={ eachOrder.id }
            id={ eachOrder.id }
            status={ eachOrder.status }
            date={ eachOrder.date }
            price={ eachOrder.price }
          />
        ))
      }
    </main>
  );
}

export default Orders;
