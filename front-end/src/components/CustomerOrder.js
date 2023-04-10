import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
import NavBar from './navBar';
import { requestSale, requestAllUsers } from '../helpers/axios';

function CustomerOrder() {
  const [informations, setInformations] = useState({});
  const [sellers, setSellers] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const { id } = useParams();

  useEffect(() => {
    const productsId = async () => {
      const requestSaleProduct = await requestSale(id);
      setInformations(requestSaleProduct);
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

  const formatDate = dayjs(informations.saleDate).format('DD/MM/YYYY');
  const dataTestId = 'customer_order_details';
  return (
    <div>
      <NavBar user={ user.name } />
      <p>
        {' '}
        PEDIDO
        <p data-testid="customer_order_details__element-order-details-label-order-id">
          {console.log('===>>> infor', informations)}
          { informations.id }
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
          { `Status: ${informations.status}`}
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
          disabled
        >
          Marcar como entregue
        </button>
      </p>
    </div>
  );
}

export default CustomerOrder;
