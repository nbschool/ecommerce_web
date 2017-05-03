import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from '../Item/';
import './ItemList.css';


class ItemList extends Component {
  componentDidMount() {
    if (!this.props.loaded) {
      this.props.fetchItemList();
    }
  }

  render() {
    if (!this.props.loaded) {
      return null;
    }

    if (this.props.itemList.length === 0) {
      return (
        <div className="ItemList">
          <div className="empty">Nessun items disponibile</div>
        </div>
      );
    }
    else{
      const itemList = this.props.itemList.map((el,index) => (
        <Item key={index} item={el} />
      ));

      return (
        <div className="ItemList">
          <section className="items">
            {itemList}
          </section>
        </div>
      );
    }
  }
}

ItemList.propTypes = {
  fetchItemList: PropTypes.func.isRequired,
  itemList: PropTypes.array.isRequired,
  loaded: PropTypes.bool.isRequired,
};

export default ItemList;
