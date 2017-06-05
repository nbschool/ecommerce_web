import { connect } from 'react-redux';
import {
  getSearchResults,
  searchItems,
  emptySearchResults,
} from '../modules/items';

import SearchBox from '../components/SearchBox';

const mapDispatchToProps = {
  search: query => searchItems(query),
  emptySearchResults: () => emptySearchResults(),
};

const mapStateToProps = state => ({
  searchResults: getSearchResults(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
