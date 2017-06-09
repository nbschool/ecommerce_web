import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import CartItem from '../CartItem/';
import './Cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.dispatchHandleChange = this.dispatchHandleChange.bind(this);
    this.handleBuyClick = this.handleBuyClick.bind(this);
  }

  dispatchHandleChange(item, quantity) {
    item.itemQuantity = quantity;
    this.props.setItemInCart(item.uuid, item.price, quantity);
  }

  handleBuyClick() {
    for (const itemUuid in this.props.cart) {
      this.props.setItemInCart(itemUuid, this.props.item(itemUuid).price, 0);
    }
    this.props.history.push("/");
  }

  render() {
    let total = 0;
    const that = this;
    const {t} = this.props;

    let cart = Object.values(this.props.cart).map((item, index) => {
      if (item.itemQuantity > 0) {
        const realItem = that.props.item(item.uuid);
        total += (item.itemQuantity * item.price);
        return (
          <CartItem
            className='cart-item'
            key={index}
            item={realItem}
            quantity={item.itemQuantity}
            dispatchHandleChange={this.dispatchHandleChange} />
        );
      }
    });

    if (cart.length === 0)
      cart = <h2>{t('cart:emptyCart')}</h2>;

    return (
      <div className='cart'>
        <h1>{t('cart:cart')}</h1>
        <div>{cart}</div>
        <h3>{t('cart:total')} = {total} €</h3>
        <button className='buy'
                onClick={this.handleBuyClick}>{t('cart:buyNow')}</button>
      </div>
    );
  }
}


Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  item: PropTypes.func.isRequired,
  setItemInCart: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate('cart')(Cart);
