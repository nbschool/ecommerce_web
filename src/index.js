import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';

import { autoRehydrate, persistStore } from 'redux-persist'

import thunkMiddleware from 'redux-thunk';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import rootReducer from './modules';
import App from './components/App';
import ItemList from './containers/ItemListContainer';
import Login from './containers/LoginContainer';

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
)

const routes = (
  <Router>
    <App>
      <Route exact path="/" component={ItemList}/>
      <Route exact path="/login" component={Login}/>
    </App>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
