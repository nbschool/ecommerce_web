import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import reducer, {
  fetchItems,
  getItems,
  itemsLoaded,
  testing
} from './items';

const mockStore = configureMockStore([thunk]);

beforeEach(() => {
  fetchMock.restore();
});

test('fetch items with success', done => {
  const data = [{
    item_id: '429994bf-784e-47cc-a823-e0c394b823e8',
    name: "gvaldambrini",
    price: 30.99,
    description: "kd fasdkfjakslfjalskdf"
  }];

  fetchMock.get(`${testing.base_url}/items`, {status: 200, body: data});

  const store = mockStore();
  const expectedActions = [
    testing.fetchItemsSuccess(data)
  ];

  return store.dispatch(fetchItems())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
});

test('fetch items with error', done => {
  fetchMock.get(`${testing.base_url}/items`, {status: 500});

  const store = mockStore();
  const expectedActions = [
    testing.fetchItemsFailure('Unable to fetch'),
  ];

  return store.dispatch(fetchItems())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
});

test('handle the fetchItemsSuccess action', () => {
  const initialState = {
    itemList: [],
    loaded: false,
  };

  const data = [{
    item_id: '429994bf-784e-47cc-a823-e0c394b823e8',
    name: "gvaldambrini",
    price: 30.99,
    description: "kd fasdkfjakslfjalskdf"
  }];

  const newState = reducer(initialState, testing.fetchItemsSuccess(data));
  expect(newState.itemList).toEqual([{
    item_id: '429994bf-784e-47cc-a823-e0c394b823e8',
    name: "gvaldambrini",
    price: 30.99,
    description: "kd fasdkfjakslfjalskdf"
  }]);
  expect(newState.loaded).toEqual(true);
});

test('handle the fetchItemsFailure action', () => {
  const initialState = {
    itemList: [],
    loaded: false,
  };

  const newState = reducer(initialState, testing.fetchItemsFailure('Unable to fetch'));
  expect(newState.itemList).toEqual([]);
  expect(newState.loaded).toEqual(true);
});

test('handle an unknown action', () => {
  const newState = reducer();
  expect(newState.itemList).toEqual([]);
  expect(newState.loaded).toEqual(false);
});

test('get the items', () => {
  const itemState = {
    itemList: [{
      item_id: '429994bf-784e-47cc-a823-e0c394b823e8',
      name: "gvaldambrini",
      price: 30.99,
      description: "kd fasdkfjakslfjalskdf"
    }],
    loaded: false,
  };

  expect(getItems({items: itemState})).toEqual(itemState.itemList);
});

test('check if items are loaded', () => {
  const itemState = {
    itemList: [],
    loaded: true,
  };

  expect(itemsLoaded({items: itemState})).toEqual(true);
});
