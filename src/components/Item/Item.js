import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import placehold from './placehold.png';
import './Item.css';

class Item extends Component {
  constructor(props) {
    super(props);
    this.setNumberItemToCart = this.setNumberItemToCart.bind(this);
  }

  setNumberItemToCart(amount, itemQuantity) {
    let count = itemQuantity;
    count += amount;
    this.props.setItemInCart(this.props.uuid, this.props.price, count);
  }

  render() {
    const item = this.props;
    const {t} = this.props;
    const tagStock = item.availability > 0;
    let emojiStock, textStock;
    if (tagStock) {
      emojiStock = '✅';
      textStock = t('item:in_stock');
    } else {
      emojiStock = '❌';
      textStock = t('item:out_stock');
    }
    const itemQuantity = this.props.itemQuantity(this.props.uuid);
    let itemsAdded = [];
    let btnAdd = [];
    if (itemQuantity > 0 && item.availability > itemQuantity) {
      itemsAdded =
        <label>{itemQuantity}</label>;
      btnAdd =
        <div className="overlay-buttons">
          <button className="addToCart" onClick={() => this.setNumberItemToCart(1, itemQuantity)}>
            {t('item:addToCart')}
          </button>
          <button className="removeFromCart"
                  onClick={() => this.setNumberItemToCart(-1, itemQuantity)}>
            {t('item:removeFromCart')}
          </button>
        </div>;
    }

    else if (itemQuantity === 0 && item.availability === 0) {
      btnAdd =
        <div className="overlay-buttons">
          <button className="buttonDisabled" disabled>{t('item:addToCart')}</button>
          <button className="buttonDisabled" disabled>{t('item:removeFromCart')}</button>
        </div>;
    }

    else if (itemQuantity === 0 && item.availability > itemQuantity) {
      btnAdd =
        <div className="overlay-buttons">
          <button className="addToCart" onClick={() => this.setNumberItemToCart(1, itemQuantity)}>
            {t('item:addToCart')}
          </button>
          <button className="buttonDisabled" disabled>{t('item:removeFromCart')}</button>
        </div>;
    }

    else if (itemQuantity > 0) {
      itemsAdded =
        <label>{itemQuantity}</label>;
      btnAdd =
        <div className="overlay-buttons">
          <button className="buttonDisabled" disabled>{t('item:addToCart')}</button>
          <button className="removeFromCart"
                  onClick={() => this.setNumberItemToCart(-1, itemQuantity)}>
            {t('item:removeFromCart')}
          </button>
        </div>;
    }

    let itemAvailable;
    if (item.availability > 0) {
      itemAvailable =
        <div className="overlay" >
          {btnAdd}
          {itemsAdded}
        </div>;
    }
    return (
      <article key={item.uuid} className="Item">
        <div className="image">
          <img src={item.pictureUrl ? item.pictureUrl : placehold} alt={item.name} />
        </div>
        <div className="info">
          <div className="name">{item.name}</div>
          <div className="price">€{item.price}</div>
          <div className="description block-with-text">{item.description}</div>
          {itemAvailable}
        </div>
        <div className="in_Stock">
          {emojiStock}<p>{textStock}</p>
        </div>
      </article>
    );
  }
}

Item.propTypes = {
  uuid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string,
  category: PropTypes.string.isRequired,
  availability: PropTypes.number.isRequired,
  setItemInCart: PropTypes.func.isRequired,
  itemQuantity: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default translate('item')(Item);
