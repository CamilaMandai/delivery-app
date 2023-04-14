import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarSeller from '../components/NavbarSeller';
import { requestSaleBySeller } from '../helpers/axios';

export default function SellerOrders() {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const requestOrders = async () => {
      const request = await requestSaleBySeller(user.id);
      console.log(request);
      setOrders(request);
    };
    requestOrders();
  }, [setOrders]);

  return (
    <div>
      <NavbarSeller />
      <section>
        { orders.length > 0 ? (
          orders.map((order) => (
            <div
              key={ order.id }
            >
              <Link to={ `/seller/orders/${order.id}` }>
                <p
                  data-testid={ `seller_orders__element-order-id-${order.id}` }
                >
                  Pedido
                </p>
                <p>{order.id}</p>
                <div
                  data-testid={ `seller_orders__element-delivery-status-${order.id}` }
                >
                  {order.status}
                </div>
                <div
                  data-testid={ `seller_orders__element-order-date-${order.id}` }
                >
                  {order.saleDate}
                </div>
                <div
                  data-testid={ `seller_orders__element-card-price-${order.id}` }
                >
                  {order.totalPrice}
                </div>
                <p
                  data-testid={ `seller_orders__element-card-address-${order.id}` }
                >
                  {order.deliveryAddress}
                </p>
              </Link>
            </div>
          ))
        ) : (
          <h2>Não há pedidos</h2>
        )}
      </section>
    </div>
  );
}
