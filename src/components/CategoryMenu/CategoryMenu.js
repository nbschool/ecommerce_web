import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './CategoryMenu.css';

const CategoryMenu = (props) => {
  const listCategories = props.listCategories.map(({id, name}) =>
    <li key={id}>
      <Link to={`/${name}`}>{name}</Link>
    </li>
  );

  return (
    <nav className="CategoryMenu">
      <ul>{listCategories}</ul>
    </nav>
  );
};

CategoryMenu.propTypes = {
  listCategories: PropTypes.array.isRequired,
};

export default CategoryMenu;
