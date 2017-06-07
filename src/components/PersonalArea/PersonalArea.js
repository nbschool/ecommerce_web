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

    this.setActiveArea = this.setActiveArea.bind(this);

    this.state = {
      activeArea: 'personalarea'
    };
  }

  setActiveArea(activeArea) {
    this.setState({
      activeArea: activeArea,
    });
  }

  render() {
    const {t} = this.props;

    let area;
    if (this.state.activeArea === "personalarea")
      area = <PersonalAreaPersonalData
        personalData={this.props.personalData}
        saveData={this.props.saveData} />;
    if (this.state.activeArea === "adressesarea")
      area = <PersonalAreaAddressData/>;
    return (
      <section className="PersonalArea">
        <h1>{t('personalArea:title')}</h1>
        <div className="content">
          <aside>
            <SidebarMenu
              active={this.state.activeArea}
              menuList={this.props.menuList}
              setActiveArea={this.setActiveArea} />
          </aside>
          <article>
            {area}
          </article>
        </div>
      </section>
    );
  }
}

PersonalArea.propTypes = {
  active: PropTypes.string.isRequired,
  setActiveArea: PropTypes.func.isRequired,
  menuList: PropTypes.array.isRequired,
  personalData: PropTypes.object.isRequired,
  saveData: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate('personalArea')(PersonalArea);
