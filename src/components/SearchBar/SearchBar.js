import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      active: false,
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.handleFocusChange = this.handleFocusChange.bind(this);

    this.timeout = null;
  }

  handleInputChange(event) {
    const { target: { value }} = event;
    const { handleInputChange } = this.props;

    clearTimeout(this.timeout);
    this.setState({
      value: value.substr(0, 20)
    });

    if (handleInputChange) { handleInputChange(value); }

    this.timeout = setTimeout(this.submitSearch, 500);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.submitSearch();
  }

  submitSearch() {
    const { value } = this.state;
    const { search, emptySearchResults } = this.props;
    if (value.length < 3) {
      if (emptySearchResults) {
        emptySearchResults();
      }
      return;
    }

    search(value);

  }

  handleFocusChange(event) {
    const { type } = event;
    const { handleFocusChange } = this.props;
    let active;

    if (type === 'focus') {
      active = true;
    } else if (type === 'blur') {
      active = false;
    }

    /**
     * Safe check in case another type of event is passed.
     * We don't want to dispatch anything if that's the case.
     */
    if (active !== undefined && handleFocusChange) {
      handleFocusChange({ active });
    }
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
            onBlur={this.handleFocusChange}
            onFocus={this.handleFocusChange}
          />
          <button className="submit"/>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  t: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  handleFocusChange: PropTypes.func,
  handleInputChange: PropTypes.func,
  emptySearchResults: PropTypes.func,
};

export default translate('login')(SearchBar);
