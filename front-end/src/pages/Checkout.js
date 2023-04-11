import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/navBar';
import {
  requestAllUsers,
  createSale,
  createSaleProduct,
  setToken,
  // requestValidateToken,
} from '../helpers/axios';
import OrderCheckout from '../components/OrderCheckout';
import '../styles/checkout.css';

function Checkout() {
  const history = useHistory();

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [sellers, setSellers] = useState([]);
  const [chosenSeller, setChosenSeller] = useState();
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  // const [saleId, setSaleId] = useState('');

  const savedUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartShop'));
    if (savedCart) {
      const savedTotal = savedCart
        .reduce((acc, curr) => acc + (curr.quantity * curr.price), 0);
      setCart(savedCart);
      setTotal(savedTotal);
    }
    const fetchApi = async () => {
      try {
        const users = await requestAllUsers();
        const sellersFiltered = users.filter((user) => user.role === 'seller');
        console.log(sellersFiltered);
        setSellers(sellersFiltered);
        setChosenSeller(sellersFiltered[0].id);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchApi();
  }, [setTotal]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartShop'));
    if (savedCart) {
      const savedTotal = savedCart
        .reduce((acc, curr) => acc + (curr.quantity * curr.price), 0);
      setTotal(savedTotal);
    }
  }, [cart]);

  const removeItem = (removedId) => {
    const newCart = cart.filter((item) => item.id !== removedId);
    localStorage.setItem('cartShop', JSON.stringify(newCart));
    setCart(newCart);
  };

  const checkout = async (event) => {
    event.preventDefault();
    try {
      // await requestValidateToken(savedUser.token);
      setToken(savedUser.token);
      const sale = await createSale({
        userId: savedUser.id,
        sellerId: chosenSeller,
        totalPrice: total,
        deliveryAddress,
        deliveryNumber,
      });
      const promisses = cart
        .map(async (item) => createSaleProduct({
          saleId: sale.id,
          productId: item.id,
          quantity: item.quantity }));
      await Promise.all(promisses);
      history.push(`orders/${sale.id}`);

      // history.push('orders/1');
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
        <th>Sub-total</th>
        <th>Remover</th>
      </tr>
    </thead>
  );

  return (
    <div>
      <NavBar user={ savedUser.name } />
      <h1 className="title-checkout">Finalizar Pedido</h1>
      <div className="box-checkout">
        <table className="table-checkout">
          { thead() }
          <tbody>
            {cart.map(({ name, quantity, price, id }, index) => (
              <OrderCheckout
                key={ id }
                name={ name }
                quantity={ quantity }
                price={ price }
                index={ index }
                handleRemove={ () => removeItem(id) }
              />
            ))}
          </tbody>
        </table>
        <h2 className="table-price" data-testid="customer_checkout__element-order-total-price">{ `Total R$ ${String(total.toFixed(2)).replace(/\./, ',')} `}</h2>
      </div>
      <div>

        <h3 className="title-detail">Detalhes e Endereço de Entrega</h3>
        <form className="box-detail" onSubmit={ checkout }>
          <label
            className="label-seller"
            htmlFor="customer_checkout__select-seller"
          >
            P. Vendedora Responsável
            <select
              className="input-address"
              data-testid="customer_checkout__select-seller"
              onChange={ (event) => setChosenSeller(event.target.value) }
            >
              {
                sellers
                  .map(
                    (seller) => (
                      <option
                        key={ seller.id }
                        value={ seller.id }
                      >
                        { seller.name }
                      </option>),
                  )
              }
              ;
            </select>
          </label>
          <label className="label-seller" htmlFor="customer_checkout__input-address">
            Endereço:
            <input
              className="input-address address"
              data-testid="customer_checkout__input-address"
              type="text"
              value={ deliveryAddress }
              onChange={ ({ target }) => setDeliveryAddress(target.value) }
            />
          </label>
          <label
            className="label-seller number"
            htmlFor="customer_checkout__input-address-number"
          >
            Número
            <input
              className="input-address numbers"
              data-testid="customer_checkout__input-address-number"
              type="text"
              value={ deliveryNumber }
              onChange={ ({ target }) => setDeliveryNumber(Number(target.value)) }
            />
          </label>
          <div className="button-div">
            <button
              className="button-checkout"
              type="submit"
              data-testid="customer_checkout__button-submit-order"
            >
              Finalizar Pedido
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default Checkout;
