import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import SidebarMenu from '../SidebarMenu/';
import PersonalAreaPersonalData from '../PersonalAreaPersonalData/';
import PersonalAreaAddressData from '../PersonalAreaAddressData/';

import './PersonalArea.css';

class PersonalArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeArea: 'personalarea'
    };
  }

  setActiveArea(activeArea) {
    this.setState({
      activeArea: activeArea
    });
  }

  render() {
    const {t} = this.props;

    let area = '';
    if (this.state.activeArea === "personalarea")
      area = <PersonalAreaPersonalData
      personalData={this.props.personalData}
      saveData={this.props.saveData} />;
    if (this.state.activeArea === "adressesarea")
      area = <PersonalAreaAddressData/>;
    return (
      <div className="PersonalArea">
        <h3>{t('personalArea:title')}</h3>
        <div className="content">
          <div className="sidebar">
            <SidebarMenu
              active={this.props.active}
              menuList={this.props.menuList}
              setActiveArea={(area) => this.setActiveArea(area)} />
          </div>
          <div className="main">
            {area}
          </div>
        </div>
      </div>
    );
  }
}

PersonalArea.propTypes = {
  t: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
  setActiveArea: PropTypes.func.isRequired,
  menuList: PropTypes.array.isRequired,
  personalData: PropTypes.object.isRequired,
  saveData: PropTypes.func.isRequired,
};

export default translate('personalArea')(PersonalArea);
