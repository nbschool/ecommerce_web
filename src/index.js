import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunkMiddleware from 'redux-thunk';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import rootReducer from './modules';
import App from './components/App';
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
      {name: 'accessori', id: 4},]

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
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
