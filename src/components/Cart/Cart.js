import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CartItem from '../CartItem/';
import './Cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.dispatchHandleChange = this.dispatchHandleChange.bind(this);
  }

  dispatchHandleChange(item, quantity) {
    item.itemQuantity = quantity;
    this.props.setItemInCart(item.uuid, item.price, quantity);
  }

  render() {
    let total = 0;
    const that = this;
    let cart = Object.values(this.props.cart).map((item, index) => {
      if(item.itemQuantity > 0) {
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
      cart = <h2>Il tuo carrello è vuoto.</h2>;

    return (
      <div className='cart'>
        <h1>Carrello</h1>
        <div>{cart}</div>
        <h3>Totale = {total} €</h3>
        <button className='buy'>Acquista ora</button>
      </div>
    );
  }
}


Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  item: PropTypes.func.isRequired,
  setItemInCart: PropTypes.func.isRequired,
};

export default Cart;
