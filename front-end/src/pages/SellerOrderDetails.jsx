import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
import NavbarSeller from '../components/NavbarSeller';
import {
  requestSale,
  requestProductsBySaleId,
  requestProducts,
  udpateSaleStatus,
} from '../helpers/axios';
import SellerProductDetail from '../components/SellerProductDetail';

export default function SellerOrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [products, setProducts] = useState([]);
  const [orderStatus, setOrderStatus] = useState('');
  // const [quantities, setQuantities] = userState([]);

  useEffect(() => {
    const getSale = async () => {
      const sale = await requestSale(id);
      setOrderStatus(sale.status);
      const orderedProducts = await requestProductsBySaleId(id);
      const allProducts = await requestProducts();
      const filteredProductsByOrder = allProducts.filter(
        (element) => orderedProducts.some((el) => el.productId === element.id),
      );
      const productsWithQuantity = filteredProductsByOrder.map((product) => (
        {
          ...product,
          quantity: (orderedProducts.find((p) => p.productId === product.id)).quantity,
        }
      ));
      setOrder(sale);
      setProducts(productsWithQuantity);
      console.log(sale);
    };
    getSale();
  }, []);

  const changeStatus = async (status) => {
    try {
      await udpateSaleStatus({ id: +id, newStatus: status });
      setOrderStatus(status);
    } catch (e) {
      console.log(e.message);
    }
  };

  const thead = () => (
    <thead>
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Total</th>
      </tr>
    </thead>
  );

  return (
    <div>
      <NavbarSeller />
      <section>
        <p
          data-testid="seller_order_details__element-order-details-label-order-id"
        >
          {`PEDIDO ${order.id}`}
        </p>
        <p
          data-testid="seller_order_details__element-order-details-label-order-date"
        >
          { dayjs(order.saleDate).format('DD/MM/YYYY') }
        </p>
        <p
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          {orderStatus}
        </p>
        <button
          type="button"
          data-testid="seller_order_details__button-preparing-check"
          onClick={ () => changeStatus('Preparando') }
          disabled={ orderStatus !== 'Pendente' }
        >
          PREPARAR PEDIDO
        </button>
        <button
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
          onClick={ () => changeStatus('Em Trânsito') }
          disabled={ orderStatus !== 'Preparando' }
        >
          SAIU PARA ENTREGA
        </button>
      </section>
      <p>Detalhe do Pedido</p>
      <table>
        {thead()}
        <tbody>
          {
            products.map(({ name, quantity, price }, index) => (
              <SellerProductDetail
                key={ index }
                name={ name }
                price={ price }
                quantity={ quantity }
                index={ index }
              />
            ))
          }
        </tbody>
      </table>
      <h2 data-testid="seller_order_details__element-order-total-price">
        {String(order.totalPrice).replace(/\./, ',')}
      </h2>
    </div>
  );
}
