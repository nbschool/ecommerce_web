import React from 'react';
import PropTypes from 'prop-types';

import './Item.css';

const Item = ({uuid, name, price, description}) => (
  <article key={uuid} className="Item">
    <div className="card">
      <div className="image">
        <img src="http://placehold.it/150x250" alt="" />
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
