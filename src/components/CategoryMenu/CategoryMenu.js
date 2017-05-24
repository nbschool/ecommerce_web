import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CategoryMenu.css';

class CategoryMenu extends Component {

  render() {
    const listCategories = this.props.listCategories.map((category) =>
      <li key={category.id}>
        <a href="#">
          {category.name}
        </a>
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
  listCategories: PropTypes.array.isRequired
};

export default CategoryMenu;
