import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CartItem.css';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOptionValue: true,
      selectedQuantity: this.props.item.quantity,
      // value: this.props.item.quantity,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({selectedQuantity: event.target.value});
    this.props.dispatchHandleChange(event.target.value);
    if (event.target.value === '10+') {
      this.setState({isOptionValue: false});
    }
    if (event.target.value != '10+' && event.target.value < '10+') {
      this.setState({isOptionValue: false});
    }
    // this.setState({value: event.target.value});
  }

  renderDropDown() {
    return (
      <select className='drop-down-item' onChange={this.handleChange} value={this.state.selectedQuantity}>
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
          className='input-quantity'
          type="number" pattern="[0-9]*"
          inputmode="numeric"
          value={this.state.selectedQuantity}
          onChange={this.handleChange}>
        </input>
        <button className='update-cart-item' onClick={this.handleChange}>Aggiorna</button>
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
            this.state.isOptionValue ? this.renderDropDown() : this.renderTextInput()
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
