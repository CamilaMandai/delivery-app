import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/navBar';

export default function SellerOrders() {
  const [orders, setOrders] = useState([]);

  // useEffect(() => {})
  
  return (
    <div>
      <NavBar />
      <section>
        { orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.id}>
              <Link to={`/seller/orders/${order.id}`}/>
              <p 
                data-testid={`seller_orders__element-order-id-${order.id}`}
                >Pedido
              </p>
              <p>{order.id}</p>
              <div 
                data-testid={`seller_orders__element-delivery-status-${order.id}`}
                >{order.status}
              </div>
              <div
                data-testid={`seller_orders__element-order-date-${order.id}`}
                >{order.saleDate}
              </div>
              <div
                data-testid={`seller_orders__element-card-price-${order.id}`}
                >{order.totalPrice}
              </div>
              <p
                data-testid={`seller_orders__element-card-address-${order.id}`}
                >{order.deliveryAddress}
              </p>
            </div>
          ))
        ): (
          <h2>Não há pedidos</h2>
          )
        }
      </section>
    </div>
  )
}
