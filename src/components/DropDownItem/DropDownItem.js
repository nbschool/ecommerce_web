import React from 'react';
import PropTypes from 'prop-types';

import placehold from './placehold.png';
import './DropDownItem.css';

const DropDownItem = ({uuid, name, price, pictureUrl}) => (
  <article key={uuid} className="DropDownItem">
    <div className="card">
      <div className="image">
        <img src={pictureUrl ? pictureUrl : placehold} alt={name} />
      </div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="price">€{price}</div>
      </div>
    </div>
  </article>
);

DropDownItem.propTypes = {
  uuid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  pictureUrl: PropTypes.string,
};

export default DropDownItem;