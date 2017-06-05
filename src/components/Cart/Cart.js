import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CartItem from '../CartItem/';
import './Cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    this.state = {value: ''}
    this.dispatchHandleChange = this.dispatchHandleChange.bind(this)
  }

  dispatchHandleChange(quantity) {
    this.setState({value: quantity})
  }

  render() {
    let subtotal, total = 0;
    const cart = this.props.items.length > 0 ? (
      this.props.items.map((item, index) => {
        subtotal = this.state.value * item.price;
        total += subtotal;
        console.log(this.state.value)
        console.log(subtotal)
        console.log(total)
        return (
          <CartItem
            className='cart-item'
            key={index}
            item={item}
            dispatchHandleChange={this.dispatchHandleChange}
            value={this.state.value} />
        );
      })
    ) : (
      <h2>Il tuo carrello è vuoto.</h2>
    );

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
