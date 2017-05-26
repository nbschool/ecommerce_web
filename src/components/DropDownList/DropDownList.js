import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DropDownItem from '../DropDownItem/';
import './DropDownList.css';


class DropDownList extends Component {
  componentDidMount() {
    if (!this.props.loaded) {
      this.props.fetchDropDownList();
    }
  }

  render() {
    if (!this.props.loaded) {
      return null;
    }

    if (this.props.dropDownList.length === 0) {
      return (
        <div className="DropDownList">
          <div className="empty">Nessun item con questa ricerca</div>
        </div>
      );
    }
    else {
      const dropDownList = this.props.dropDownList.map((el,index) => (
        <DropDownItem key={index} {...el} />
      ));

      return (
        <div className="DropDownList">
          <section className="items">
            {dropDownList}
          </section>
        </div>
      );
    }
  }
}

DropDownList.propTypes = {
  fetchDropDownList: PropTypes.func.isRequired,
  dropDownList: PropTypes.array.isRequired,
  loaded: PropTypes.bool.isRequired,
};

export default DropDownList;
