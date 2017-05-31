import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';


import placehold from './placehold.png';
import './Item.css';

const Item = ({uuid, name, price, description, pictureUrl, t}) => (
  <article key={uuid} className="Item">

    <div className="card">
      <div className="image">
        <img src={pictureUrl ? pictureUrl : placehold} alt={name} />
      </div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="price">€{price}</div>
        <div className="description block-with-text">{description}</div>
        <div className="overlay">
          <button className="addToCart">{t('item:addToCart')}</button>
          <button className="removeFromCart">{t('removeFromCart')}</button>
        </div>
      </div>
    </div>

  </article>
);

Item.propTypes = {
  uuid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string,
  category: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired
};

export default translate('item')(Item);
