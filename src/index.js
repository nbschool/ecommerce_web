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

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

const routes = (
  <Router>
    <App>
      <Route exact path="/" component={ItemList}/>
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
