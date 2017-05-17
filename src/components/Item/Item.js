import React from 'react';
import PropTypes from 'prop-types';


import './Item.css';

const Item = ({uuid, name, price, description, pictureUrl}) => (
  <article key={uuid} className="Item">
    <div className="card">
      <div className="image">
        <img src={pictureUrl} alt="" />
      </div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="price">€{price}</div>
        <div className="description block-with-text">{description}</div>
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
};

export default Item;
