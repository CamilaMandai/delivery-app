import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CartShop({ totalValue }) {
  return (
    <div>
      <Link to="/customer/checkout">
        <h3>{`Ver Carrinho: R$ ${totalValue}`}</h3>
      </Link>
    </div>
  );
}

CartShop.propTypes = {
  totalValue: PropTypes.number.isRequired,
};

export default CartShop;
