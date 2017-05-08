import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './App.css';

const App = (props) => (
  <div>
    <ul>
      <li><Link to="/">ItemList</Link></li>
    </ul>
    <hr/>
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.any
};

export default App;
