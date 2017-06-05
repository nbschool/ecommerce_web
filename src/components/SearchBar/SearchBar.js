import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.timeout = null;
  }

  handleInputChange(event) {
    clearTimeout(this.timeout);
    this.setState({
      value: event.target.value.substr(0, 20)
    });
    this.timeout = setTimeout(this.submitSearch, 500);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.submitSearch();
  }

  submitSearch() {
    if (this.state.value.length < 3) return;
    this.props.search(this.state.value);
  }

  render() {
    const {t} = this.props;

    return (
      <div className="SearchBar">
        <form className="box" onSubmit={this.handleFormSubmit}>
          <input type="text"
            placeholder={t('searchBar:input_placeholder')}
            name="search"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
          <button className="submit">

          </button>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate('login')(SearchBar);
