import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TopBar.css';

const TopBar = props => (
  <div className="TopBar">
    <div className="Hamburger"/>
    <div className="content">
      {props.children}
    </div>
  </div>
);

TopBar.propTypes = {
  children: PropTypes.node,
};

export default TopBar;
