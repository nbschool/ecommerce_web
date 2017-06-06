import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import placehold from './placehold.png';
import './Item.css';

const Item = (props) => {
  const {t, tagStock} = props;
  let emojiStock, textStock;
  if (tagStock) {
    emojiStock = '✅';
    textStock = t('item:in_stock');
  } else {
    emojiStock = '❌';
    textStock = t('item:out_stock');
  }

  return (
    <article key={props.uuid} className="Item">
      <div className="card">
        <div className="image">
          <img src={props.pictureUrl ? props.pictureUrl : placehold}
           alt={props.name} />
        </div>
        <div className="info">
          <div className="name">{props.name}</div>
          <div className="price">€{props.price}</div>
          <div className="description block-with-text">{props.description}</div>
        </div>
        <div className="in_Stock">
          {emojiStock}<p>{textStock}</p>
        </div>
      </div>
    </article>
  );
};


Item.propTypes = {
  uuid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string,
  category: PropTypes.string.isRequired,
  tagStock: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate('item')(Item);
