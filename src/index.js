import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunkMiddleware from 'redux-thunk';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import rootReducer from './modules';
import App from './components/App';
import i18n from './i18n'; // initialized i18next instance

import ItemList from './containers/ItemListContainer';
import CategoryMenu from './components/CategoryMenu';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

const CATEGORIES = [
      {name: 'abbigliamento uomo', id: 1},
      {name: 'abbigliamento donna', id: 2},
      {name: 'scarpe', id: 3},
      {name: 'accessori', id: 4},];

const routes = (
  <Router>
    <App>
      <CategoryMenu listCategories={CATEGORIES}/>
      <Route exact path="/" component={ItemList}/>
      <Route path="/:category" component={ItemList}/>
    </App>
  </Router>
);

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      {routes}
    </Provider>
  </I18nextProvider>,
  document.getElementById('root')
);
