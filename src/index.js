import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';

import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';

import { autoRehydrate, persistStore } from 'redux-persist';

import thunkMiddleware from 'redux-thunk';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import rootReducer from './modules';
import App from './components/App';
import i18n from './i18n'; // initialized i18next instance

import CategoryMenu from './components/CategoryMenu';
import ItemList from './containers/ItemListContainer';
import Login from './containers/LoginContainer';
import Cart from './containers/CartContainer';

const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(thunkMiddleware),
    autoRehydrate(),
  ),
);

// begin periodically persisting the store
persistStore(
  store,
  { whitelist: ['login'] },
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
      <Route exact path="/login" component={Login}/>
      <Route path="/:category" component={ItemList}/>
      <Route exact path="/carrello" component={Cart}/>

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
