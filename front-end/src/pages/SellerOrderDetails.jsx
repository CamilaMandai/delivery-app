import React from 'react';
import NavbarSeller from '../components/NavbarSeller';

export default function SellerOrderDetails() {
  const [order, setOrder] = useState([]);

  // useEffect() requestSale

  return (
    <div>
      <NavbarSeller />
      <section>
        <p
          datatest="seller_order_details__element-order-details-label-order-id"
        >
          {`PEDIDO ${order.id}`}
        </p>
        <p
          datatest="seller_order_details__element-order-details-label-order-date"
        >
          {order.saleDate}
        </p>
        <p
          datatest="seller_order_details__element-order-details-label-delivery-status"
        >
          {order.status}
        </p>
        <button
          type="button"
          datatest="seller_order_details__button-preparing-check"
        >
          PREPARAR PEDIDO
        </button>
        <button
          type="button"
          datatest="seller_order_details__button-dispatch-check"
        >
          SAIU PARA ENTREGA
        </button>
      </section>
      <p>Detalhe do Pedido</p>
      TABLE
    </div>
  );
}
