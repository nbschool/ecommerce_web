import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CartItem from '../CartItem/';
import './Cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.dispatchHandleChange = this.dispatchHandleChange.bind(this)
  }

  dispatchHandleChange(quantity) {
    return
  }

  render() {
    let total = 0;
    let cart = this.props.items.map((item, index) => {
        total += (item.quantity * item.price);
        return (
          <CartItem
            className='cart-item'
            key={index}
            item={item}
            dispatchHandleChange={this.dispatchHandleChange} />
        );
    });

    if (cart.length == 0)
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
  items: PropTypes.array,
};

export default Cart;
