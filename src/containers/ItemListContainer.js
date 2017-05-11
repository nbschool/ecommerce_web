import { connect } from 'react-redux';
import {
    fetchItems,
    getItems,
    itemsLoaded
} from '../modules/items';

import ItemList from '../components/ItemList';


const mapDispatchToProps = {
  fetchItemList: () => fetchItems()
};

const mapStateToProps = (state) => {
  return {
    itemList: getItems(state),
    loaded: itemsLoaded(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
