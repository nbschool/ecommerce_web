import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SidebarMenu.css';

class SidebarMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: props.active ? props.active : 'personalarea'
    };
  }

  setMenuActive(area) {
    this.setState({active: area.name});
    this.props.setActiveArea(area.name);
  }

  render() {
    const menu = this.props.menuList.map((menu, index) => {
      const menuClass = (this.state.active === menu.name) ? "active" : '';
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
