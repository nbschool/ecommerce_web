import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TopBar.css';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {image} = this.props;

    return (
      <div className="TopBar">
        <div className="Hamburger"></div>
      </div>
    );
  }
}

TopBar.propTypes = {
};

export default TopBar;
