import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from '../Item/';
import './CartItem.css';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOptionValue: true,
      selectedQuantity: '',
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({selectedQuantity: event.target.value});
    if (event.target.value === '10+') {
      this.setState({isOptionValue: false});
    }
    this.setState({value: event.target.value});
  }

  renderDropDown() {
    return (
      <select onChange={this.handleChange} value={this.state.value}>
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
      <div>
        <input
          className='inputQuantity' type='text'
          value={this.state.value}
          onChange={this.handleChange}>
        </input>
        <button className='updateCartItem'>Aggiorna</button>
      </div>
    );
  }

  render() {
    return (
      <div className='cartItem'>
        <Item
          name={this.props.item.name}
          price={this.props.item.price} />
        <img className='cartItemImg' src={this.props.item.pictureUrl}/>
        <h3>Quantità = {this.props.item.quantity}</h3>
        <h3>Subtotale = {this.props.item.price * this.props.item.quantity}</h3>
        {
          this.state.isOptionValue ? this.renderDropDown() : this.renderTextInput()
        }
        <button className='removeCartItem'>Rimuovi</button>
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.array,
};

export default CartItem;
