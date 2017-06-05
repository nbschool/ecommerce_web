import { connect } from 'react-redux';
import {
    fetchItems,
    getItems,
    itemsLoaded,
    setCart,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
