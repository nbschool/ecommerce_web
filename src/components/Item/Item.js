import React from 'react';
import PropTypes from 'prop-types';

import placehold from './placehold.png';
import './Item.css';

console.log(placehold);
const Item = ({uuid, name, price, description}) => (
  <article key={uuid} className="Item">
    <div className="card">
      <div className="image">
        <img src={placehold} alt={name} />
      </div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="price">€{price}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  </article>
);

Item.propTypes = {
  uuid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Item;
