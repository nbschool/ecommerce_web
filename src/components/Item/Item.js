import React from 'react';
import PropTypes from 'prop-types';

import './Item.css';

const Item = ({item}) => {
  return (
    <article key={item.item_id} className="Item">
      <div className="card">
        <div className="image">
          <img src="http://placehold.it/150x250" alt="" />
        </div>
        <div className="info">
          <div className="name">{item.name}</div>
          <div className="price">€{item.price}</div>
          <div className="description">{item.description}</div>
        </div>
      </div>
    </article>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
