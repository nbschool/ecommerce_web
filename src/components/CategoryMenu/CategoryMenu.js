import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import './CategoryMenu.css';

const CategoryMenu = withRouter((props) => {
  const pathname = props.location.pathname;
  const category = pathname.slice(1);
  const menu = [{id: 0, name: 'home'}, ...props.listCategories];

  const listCategories = menu.map(({id, name}) => {
    const url = name === 'home' ? '' : name;
    const className = category === url ? 'active' : '';
    return (<li key={id} className={className}>
      <Link to={`/${url}`}>{name}</Link>
    </li>);
  });

  return (
    <nav className="CategoryMenu">
      <ul>
        {listCategories}
      </ul>
    </nav>
  );
});

CategoryMenu.propTypes = {
  listCategories: PropTypes.array.isRequired,
};

export default CategoryMenu;
