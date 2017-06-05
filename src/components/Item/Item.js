import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import placehold from './placehold.png';
import './Item.css';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numItems: 0,
    };
    this.setNumberItemToCart = this.setNumberItemToCart.bind(this);
  }

  setNumberItemToCart(amount) {
    let count = this.state.numItems;
    count += amount;
    this.setState({
      numItems: count
    });

    this.props.setItemInCart(this.props.uuid, this.props.price, count);
  }

  render() {
    const item = this.props;
    const {t} = this.props;


    let itemsAdded = [];
    let btnAdd = [];

    if (this.state.numItems > 0 && item.availability > this.state.numItems) {
      itemsAdded =
        <label>{this.state.numItems}</label>;
      btnAdd =
        <div>
          <button className="addToCart" onClick={() => this.setNumberItemToCart(1)}>
            {t('item:addToCart')}
          </button>
          <button className="removeFromCart" onClick={() => this.setNumberItemToCart(-1)}>
            {t('item:removeFromCart')}
          </button>
        </div>;
    }

    else if (this.state.numItems === 0 && item.availability === 0) {
      btnAdd =
        <div>
          <button className="buttonDisabled" disabled>{t('item:addToCart')}</button>
          <button className="buttonDisabled" disabled>{t('item:removeFromCart')}</button>
        </div>;
    }

    else if (this.state.numItems === 0 && item.availability > this.state.numItems) {
      btnAdd =
        <div>
          <button className="addToCart" onClick={() => this.setNumberItemToCart(1)}>
            {t('item:addToCart')}
          </button>
          <button className="buttonDisabled" disabled>{t('item:removeFromCart')}</button>
        </div>;
    }

    else if (this.state.numItems > 0) {
      itemsAdded =
        <label>{this.state.numItems}</label>;
      btnAdd =
        <div>
          <button className="buttonDisabled" disabled>{t('item:addToCart')}</button>
          <button className="removeFromCart" onClick={() => this.setNumberItemToCart(-1)}>
            {t('item:removeFromCart')}
          </button>
        </div>;
    }

    let itemAvailable = [];
    if (item.availability > 0) {
      itemAvailable =
        <div className="overlay" >
          {btnAdd}
          {itemsAdded}
        </div>;
    }
    return (
      <article key={item.uuid} className="Item">
        <div className="card">
          <div className="image">
            <img src={item.pictureUrl ? item.pictureUrl : placehold} alt={item.name} />
          </div>
          <div className="info">
            <div className="name">{item.name}</div>
            <div className="price">€{item.price}</div>
            <div className="description block-with-text">{item.description}</div>
            {itemAvailable}
          </div>
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
  t: PropTypes.func.isRequired
};

export default translate('item')(Item);
