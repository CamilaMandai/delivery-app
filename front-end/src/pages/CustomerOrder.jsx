import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../styles/orderCard.css';
import { requestSale, requestAllUsers, udpateSaleStatus } from '../helpers/axios';

function CustomerOrder() {
  const [informations, setInformations] = useState({});
  const [sellers, setSellers] = useState([]);
  const [orderStatus, setOrderStatus] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  const { id } = useParams();

  useEffect(() => {
    const productsId = async () => {
      const requestSaleProduct = await requestSale(id);
      setInformations(requestSaleProduct);
      setOrderStatus(requestSaleProduct.status);
    };
    const fetchApi = async () => {
      try {
        const users = await requestAllUsers();
        const sellersFiltered = users.filter((a) => a.role === 'seller');
        setSellers(sellersFiltered);
      } catch (e) {
        console.error(e);
      }
    };
    productsId();
    fetchApi();
  }, []);

  const changeStatus = async () => {
    await udpateSaleStatus({ id: +id, newStatus: 'Entregue' });
    setOrderStatus('Entregue');
  };

  const formatDate = dayjs(informations.saleDate).format('DD/MM/YYYY');
  const dataTestId = 'customer_order_details';
  return (
    <div>
      <NavBar user={ user.name } />
      <div className="orders-page-container orders-page-orders-container">
        <p className="pedido">
          {' '}
          <p data-testid="customer_order_details__element-order-details-label-order-id">
            {console.log('===>>> infor', informations)}
            { `PEDIDO ${informations.id}`}
          </p>
        </p>
        <p>
          <span
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {`P. Venda: ${sellers.map((seller) => (seller.name))}`}
          </span>
        </p>
        <p>
          <span
            data-testid="customer_order_details__element-order-details-label-order-date"
          >

            {`Data do pedido: ${formatDate}`}
          </span>
        </p>
        <p>
          <span
            data-testid={ `${dataTestId}__element-order-details-label-delivery-status` }
          >
            { `Status: ${orderStatus}`}
          </span>
        </p>
        <p>
          <span
            data-testid={ `${dataTestId}__element-order-total-price` }
          >
            {`${informations.totalPrice}`.replace(/\./, ',')}
          </span>
        </p>
        <p>
          <button
            type="button"
            data-testid="customer_order_details__button-delivery-check"
            disabled={ orderStatus !== 'Em Trânsito' }
            onClick={ changeStatus }
          >
            Marcar como entregue
          </button>
        </p>
      </div>
    </div>
  );
}

export default CustomerOrder;
