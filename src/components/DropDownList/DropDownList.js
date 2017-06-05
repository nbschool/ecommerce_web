import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import DropDownItem from '../DropDownItem/';
import './DropDownList.css';


const DropDownList = props => {
  const {t, loaded, dropDownList } = props;

  if (!loaded) {
    return null;
  }

  if (dropDownList.length === 0) {
    return (
      <div className="DropDownList">
        <div className="empty">{t('dropDownList:empty')}</div>
      </div>
    );
  }
  else {
    const itemsList = dropDownList.map((el,index) => (
      <DropDownItem key={index} {...el} />
    ));

    return (
      <div className="DropDownList">
        <section className="items">
          {itemsList}
        </section>
      </div>
    );
  }
};

DropDownList.propTypes = {
  dropDownList: PropTypes.array.isRequired,
  loaded: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate('dropDownList')(DropDownList);
