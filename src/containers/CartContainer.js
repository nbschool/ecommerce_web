import { connect } from 'react-redux';
import {
    getCart,
    getItem,
    setCart,
} from '../modules/items';

import Cart from '../components/Cart';

const mapDispatchToProps = {
  setItemInCart: (uuid, price, numItems) => setCart(uuid, price, numItems),
};

const mapStateToProps = (state) => {
  return {
    cart: getCart(state),
    item: ((uuid) => getItem(state, uuid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
