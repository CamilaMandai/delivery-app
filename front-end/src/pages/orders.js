import React, { useState, useEffect } from 'react';
import NavBar from '../components/navBar'; 
import { requestOrders } from '../helpers/axios';
import orderCard from '../components/orderCard';

function Orders() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    (
      async () => { 
      const data = await requestOrders();
      setOrder(data);
    });
  }, []);

  return(
    <main>
      <NavBar />
      {
        order && order.map((eachOrder) => {
          return (
            <orderCard
              key={ eachOrder.id }
              id={ eachOrder.id }
              status={ eachOrder.status }
              date={ eachOrder.date }
              price={ eachOrder.price }
            />
            )
        })
      }
    </main>
  )
}

export default Orders;