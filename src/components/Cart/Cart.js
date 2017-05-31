import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from '../Item/';
import './Cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOptionValue: true,
      selectedQuantity: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({selectedQuantity: event.target.value});
    if (event.target.value === '10+')
      this.setState({isOptionValue: false});
  }

  renderDropDown() {
    return (
      <select value={this.state.value} onChange={this.handleChange}>
        {
          ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'].map(
            (el, index) => <option value={el} key={index}>{el}</option>
          )
        }
      </select>
    );
  }

  renderTextInput() {
    return (
      <input type='text' value={this.state.selectedQuantity}></input>
    );
  }

  render() {
    let subtotal, total = 0;
    const cart = this.props.items.length > 0 ? (
      this.props.items.map((item, index) => {
        subtotal = item.quantity * item.price;
        total += subtotal;
        return (
          <div key={index}>
            <Item
              name={item.name}
              price={item.price}
            />
            <img src={item.pictureUrl} />
            <h3>Quantità = {item.quantity}</h3>
            <h3>Subtotale = {subtotal}</h3>
            {
              this.state.isOptionValue ? this.renderDropDown() : this.renderTextInput()
            }
          </div>
        );
      }
      )
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
