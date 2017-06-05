import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar';
import DropDownList from '../DropDownList';


class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      query: '',
    };
    this.updateInputState = this.updateInputState.bind(this);
    this.updateQueryValue = this.updateQueryValue.bind(this);
  }

  /**
   * Get the focus/blur status of the searchbar input
   * as a boolean value.
   * Used to hide the results if the search input is not
   * currently focues (allowing interaction with underneath
   * elements)
   */
  updateInputState(inputState) {
    this.setState({ isActive: inputState.active });
  }

  /**
   * Get the search bar input value. Used to determine wether
   * to show the dropdown list of results of not (useless if
   * no input is present in the dropdown)
   */
  updateQueryValue(value) { this.setState({ query: value }); }

  get dropdown() {
    if (!this.state.query) {
      return null;
    }

    return (
      <DropDownList
        dropDownList={this.props.searchResults}
        loaded={true} />
    );
  }

  render() {
    const { search, emptySearchResults } = this.props;
    return (
      <div>
        <SearchBar
          search={search}
          emptySearchResults={emptySearchResults}
          handleFocusChange={this.updateInputState}
          handleInputChange={this.updateQueryValue} />
        {this.state.isActive ? this.dropdown : null }
      </div>
    );
  }
}


SearchBox.propTypes = {
  search: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired,
  emptySearchResults: PropTypes.func.isRequired,
};

export default SearchBox;
