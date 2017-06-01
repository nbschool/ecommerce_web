import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CartItem from '../CartItem/';
import './Cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let subtotal, total = 0;

    const cart = this.props.items.length > 0 ? (
      this.props.items.map((item, index) => {
        subtotal = item.quantity * item.price;
        total += subtotal;
        return (
          <CartItem
            className='cartItems'
            key={index}
            item={item}/>
        );
      })
    ) : (
      <h2>Il tuo carrello è vuoto.</h2>
    );

    return (
      <div>
        <h1>Carrello</h1>
        <div className='cart'>{cart}</div>
        <h3>Totale = {total} €</h3>
        <button>Acquista ora</button>
      </div>
    );
  }
}


Cart.propTypes = {
  items: PropTypes.array,
};

export default Cart;
