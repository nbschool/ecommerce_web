import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './CategoryMenu.css';

class CategoryMenu extends Component {

  render() {
    const listCategories = this.props.listCategories.map(({id, name}) =>
      <li key={id}>
        <NavLink to={`/${name}`}>{name}</NavLink>
      </li>
    );
    return (
      <nav className="CategoryMenu">
        <ul>{listCategories}</ul>
      </nav>
    );
  }
}

CategoryMenu.proptypes = {
  listCategories: PropTypes.array.isRequired,
};

export default CategoryMenu;
