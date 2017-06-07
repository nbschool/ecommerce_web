import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SidebarMenu.css';

class SidebarMenu extends Component {
  setMenuActive(area) {
    this.props.setActiveArea(area.name);
  }

  render() {
    const menu = this.props.menuList.map((menu, index) => {
      const menuClass = (this.props.active === menu.name) ? "active" : '';
      return (
        <li key={index} onClick={() => this.setMenuActive(menu)} className={menuClass}>
          <a href="#">{menu.label}</a>
        </li>
      );
    });

    return (
      <section className="SidebarMenu">
        <ul>
          {menu}
        </ul>
      </section>
    );
  }
}

SidebarMenu.propTypes = {
  active: PropTypes.string.isRequired,
  setActiveArea: PropTypes.func.isRequired,
  menuList: PropTypes.array.isRequired
};

export default SidebarMenu;
