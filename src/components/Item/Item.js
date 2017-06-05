import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import placehold from './placehold.png';
import './Item.css';

class Item extends Component {
  render() {
    const {t} = this.props;
    let emojiStock, textStock;
    if (this.props.tagStock) {
      emojiStock = '✅';
      textStock = t('item:textStock');
    } else {
      emojiStock = '❌';
      textStock = t('item:textStock');
    }
    return (
      <article key={this.props.uuid} className="Item">
        <div className="card">
          <div className="image">
            <img src={this.props.pictureUrl ? this.props.pictureUrl : placehold} alt={this.props.name} />
          </div>
          <div className="info">
            <div className="name">{this.props.name}</div>
            <div className="price">€{this.props.price}</div>
            <div className="description block-with-text">{this.props.description}</div>
          </div>
          <div className="in_Stock">
            {emojiStock}<p>{textStock}</p>
          </div>
        </div>
      </article>
    );
  }
};

Item.propTypes = {
  uuid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string,
  category: PropTypes.string.isRequired,
  emojiStock: PropTypes.string.isRequired,
  tagStock: PropTypes.bool.isRequired,
  textStock: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate('item')(Item);
