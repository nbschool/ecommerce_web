import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Item from '../Item/';
import './ItemList.css';


class ItemList extends Component {
  componentDidMount() {
    if (!this.props.loaded) {
      this.props.fetchItemList();
    }
  }

  render() {
    let {itemList} = this.props;
    const { match: { params: { category } } } = this.props;
    const {t} = this.props;

    if (!this.props.loaded) {
      return null;
    }

    if (itemList.length === 0) {
      return (
        <div className="ItemList">
          <div className="empty">{t('itemList:empty')}</div>
        </div>
      );
    }

    else {
      if (category) {
        itemList = itemList.filter(el => el.category === category);
      }

      itemList = itemList.map((el, index) => (
        <Item key={index} {...el}
              setItemInCart={this.props.setItemInCart}
              itemQuantity={this.props.itemQuantity}/>
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
  match: PropTypes.object.isRequired,
  setItemInCart: PropTypes.func.isRequired,
  itemQuantity: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate('itemList')(ItemList);
