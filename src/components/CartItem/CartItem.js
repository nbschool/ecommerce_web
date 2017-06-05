import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CartItem.css';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOptionValue: true,
      item: this.props.item,
      selectedQuantity: this.props.item.quantity,
      textQuantityValue: this.props.item.quantity,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const value = parseInt(event.target.value);
    this.setState({
      selectedQuantity: value,
      isOptionValue: value < 10,
    });
    this.props.dispatchHandleChange(event.target.value);
  }

  handleTextChange(event) {
    this.setState({textQuantityValue: event.target.value});
  }

  handleUpdateClick() {
    this.setState({
      selectedQuantity: this.state.textQuantityValue,
      isOptionValue: this.state.textQuantityValue < 10,
    });
    this.props.dispatchHandleChange(this.state.textQuantityValue);
  }

  get renderDropDown() {
    const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
    return (
      <select
        className='drop-down-item'
        onChange={this.handleChange}
        value={this.state.selectedQuantity}>
        {
          values.map(
            (el, index) => <option value={el} key={index}>{el}</option>
          )
        }
      </select>
    );
  }

  get renderTextInput() {
    return (
      <div>
        <input
          className='input-quantity'
          type="number"
          pattern="[0-9]*"
          inputMode="numeric"
          value={this.state.textQuantityValue}
          onChange={this.handleTextChange}>
        </input>
        <button className='update-cart-item' onClick={this.handleUpdateClick}>Aggiorna</button>
      </div>
    );
  }

  render() {
    return (
      <div className='cart-item'>
        <div className='cart-item-top'>
          <img className='cart-item-img' src={this.props.item.pictureUrl} />
          <div className='item'>
            <div className='item-name'>{this.props.item.name}</div>
            <div>Prezzo: {this.props.item.price}</div>
          </div>
        </div>
        <div className='cart-item-bottom'>
          <div className='class-name-quantity'>Quantità = {this.state.selectedQuantity}</div>
          <div className='class-name-subtotal'>
            Subtotale = {this.props.item.price * this.state.selectedQuantity} €
          </div>
          {
            this.state.isOptionValue ? this.renderDropDown : this.renderTextInput
          }
          <button className='remove-cart-item'>Rimuovi</button>
        </div>
      </div>
    );
  }
}


CartItem.propTypes = {
  item: PropTypes.array,
  dispatchHandleChange: PropTypes.func.isRequired,
};

export default CartItem;
