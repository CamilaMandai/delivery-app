import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/navBar';
import { requestAllUsers, createSale } from '../helpers/axios';
import Order from '../components/Order';

function Checkout() {
  const history = useHistory();

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [sellers, setSellers] = useState([]);
  const [sellerId, setSellerId] = useState();
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState(0);

  const savedUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartShop'));
    const savedTotal = savedCart
      .reduce((acc, curr) => acc + (curr.quantity * curr.price), 0);
    const fetchApi = async () => {
      try {
        const users = await requestAllUsers();
        const sellersFiltered = users.filter((user) => user.role === 'seller');
        setSellers(sellersFiltered);
        setSellerId(sellersFiltered[0]);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchApi();
    setTotal(savedTotal);
    setCart(savedCart);
  }, [setTotal]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartShop'));
    const savedTotal = savedCart
      .reduce((acc, curr) => acc + (curr.quantity * curr.price), 0);
    setTotal(savedTotal);
  }, [cart]);

  const removeItem = (removedId) => {
    const newCart = cart.filter((item) => item.id !== removedId);
    localStorage.setItem('cartShop', JSON.stringify(newCart));
    setCart(newCart);
  };

  const checkout = async () => {
    try {
      const sale = await createSale({
        userId: savedUser.id,
        sellerId,
        totalPrice: total,
        deliveryAddress,
        deliveryNumber,
        saleDate: new Date() });
      console.log(sale);
      history.push(`orders/${sale.id}`);
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
      <h1>Finalizar Pedido</h1>
      <div>
        <table>
          { thead() }
          <tbody>
            {cart.map(({ name, quantity, price, id }, index) => (
              <Order
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
        <h2 data-testid="customer_checkout__element-order-total-price">{ total }</h2>
      </div>
      <div>
        <h3>Detalhes e Endereço de Entrega</h3>
        <form>
          <label htmlFor="customer_checkout__select-seller">
            P. Vendedora Responsável
            <select
              data-test-id="customer_checkout__select-seller"
              onChange={ (event) => setSellerId(event.target.value) }
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
          <label htmlFor="customer_checkout__input-address">
            Endereço:
            <input
              data-testid="customer_checkout__input-address"
              type="text"
              value={ deliveryAddress }
              onChange={ ({ target }) => setDeliveryAddress(target.value) }
            />
          </label>
          <label htmlFor="customer_checkout__input-address-number">
            Número
            <input
              data-testid="customer_checkout__input-address-number"
              type="number"
              value={ deliveryNumber }
              onChange={ ({ target }) => setDeliveryNumber(Number(target.value)) }
            />
          </label>
          <button
            type="button"
            data-testid="customer_checkout__button-submit-order"
            onClick={ checkout }
          >
            Finalizar Pedido
          </button>
        </form>
      </div>

    </div>
  );
}

export default Checkout;
