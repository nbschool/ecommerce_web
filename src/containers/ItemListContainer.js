import { connect } from 'react-redux';
import {
    fetchItems,
    getItems,
    itemsLoaded,
    setCart,
    getCart,
    getCartQuantity,
} from '../modules/items';

import ItemList from '../components/ItemList';

const mapDispatchToProps = {
  fetchItemList: () => fetchItems(),
  setItemInCart: (uuid, price, numItems) => setCart(uuid, price, numItems),

};

const mapStateToProps = (state) => {
  return {
    itemList: getItems(state),
    loaded: itemsLoaded(state),
    itemQuantity: (uuid) => getCartQuantity(state, uuid),
    cart: getCart(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
