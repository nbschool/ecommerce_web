import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import placehold from './placehold.png';
import './CartItem.css';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOptionValue: true,
      item: this.props.item,
      selectedQuantity: this.props.quantity,
      textQuantityValue: this.props.quantity,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    if (this.checkAvailability(this.props.item, Number.parseInt(event.target.value))) {
      const value = parseInt(event.target.value);
      this.setState({
        selectedQuantity: value,
        isOptionValue: value < 10,
      });
      this.props.dispatchHandleChange(this.props.item, Number.parseInt(event.target.value));
    } else {
      alert('Prodotto non disponibile con questa quantità.');
    }
  }

  checkAvailability(item, insertedQuantity) {
    return (item.availability >= insertedQuantity) ? true : false;
  }

  handleTextChange(event) {
    this.setState({textQuantityValue: event.target.value});
  }

  handleUpdateClick() {
    if (this.checkAvailability(this.props.item, Number.parseInt(this.state.textQuantityValue))) {
      this.setState({
        selectedQuantity: this.state.textQuantityValue,
        isOptionValue: this.state.textQuantityValue < 10,
      });
      this.props.dispatchHandleChange(this.props.item,
                                      Number.parseInt(this.state.textQuantityValue));
    } else {
      alert('Prodotto non disponibile con questa quantità.');
    }
  }

  handleRemoveClick() {
    this.props.dispatchHandleChange(this.props.item, 0);
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
    const item = this.props.item;
    const {t} = this.props;
    return (
      <div className='cart-item'>
        <div className='cart-item-top'>
          <div className='cart-item-img'>
            <img
                 src={item.pictureUrl ? item.pictureUrl : placehold}
                 alt={item.name} />
          </div>
          <div className='item'>
            <div className='item-name'>{item.name}</div>
            <div className='item-price'>EUR {item.price}</div>
          </div>
        </div>
        <div className='cart-item-bottom'>
          <div className='class-name-quantity'>{t('cartItem:quantity')} = {this.state.selectedQuantity}</div>
          <div className='class-name-subtotal'>
            {t('cartItem:subtotal')} = EUR {item.price * this.state.selectedQuantity}
          </div>
          {
            this.state.isOptionValue ? this.renderDropDown : this.renderTextInput
          }
          <button className='remove-cart-item'
                  onClick={this.handleRemoveClick}>{t('cartItem:remove')}</button>
          <hr className="thin-line-separator"/>
        </div>
      </div>
    );
  }
}


CartItem.propTypes = {
  item: PropTypes.object,
  quantity: PropTypes.number,
  dispatchHandleChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate('cartItem')(CartItem);
