import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import DropDownItem from '../DropDownItem/';
import './DropDownList.css';


class DropDownList extends Component {
  render() {
    const {t} = this.props;

    if (!this.props.loaded) {
      return null;
    }

    if (this.props.dropDownList.length === 0) {
      return (
        <div className="DropDownList">
          <div className="empty">{t('dropDownList:empty')}</div>
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
  dropDownList: PropTypes.array.isRequired,
  loaded: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate('dropDownList')(DropDownList);
