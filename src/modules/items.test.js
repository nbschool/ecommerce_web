import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import reducer, {
  fetchItems,
  getItems,
  itemsLoaded,
  filterItemsData,
  searchItems,
  emptySearchResults,
  testing
} from './items';

const mockStore = configureMockStore([thunk]);

beforeEach(() => {
  fetchMock.restore();
});

test('fetch items with success', done => {
  const data = [{
    data: {
      type: "item",
      attributes: {
        description: "Deserunt ut quae architecto error assumenda ",
        price: 17.86,
        availability: 29,
        name: "Voluptatum dolorum atque."
      },
      id: "2aabf825-40b3-03d5-e686-9eaebd156c0e",
      links: {
        self: "/items/2aabf825-40b3-03d5-e686-9eaebd156c0e"
      }
    },
    links: {
      self: "/items/2aabf825-40b3-03d5-e686-9eaebd156c0e"
    }
  }];

  const pictureData = {};
  fetchMock.get(`${testing.base_url}/items`, {status: 200, body: data});
  fetchMock.get(
    `${testing.base_url}/items/2aabf825-40b3-03d5-e686-9eaebd156c0e/pictures`,
    {status: 200, body: pictureData}
  );
  const store = mockStore();
  const expectedActions = [
    testing.fetchItemsSuccess(filterItemsData(data)),
    testing.fetchPictureSuccess({}),
  ];

  return store.dispatch(fetchItems())
    .then(actions => Promise.all(actions))
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
    items: [],
    loaded: false,
  };

  const data = [{
    data: {
      type: "item",
      attributes: {
        description: "Deserunt ut quae architecto error assumenda ",
        price: 17.86,
        availability: 29,
        name: "Voluptatum dolorum atque."
      },
      id: "2aabf825-40b3-03d5-e686-9eaebd156c0e",
      links: {
        self: "/items/2aabf825-40b3-03d5-e686-9eaebd156c0e"
      }
    },
    links: {
      self: "/items/2aabf825-40b3-03d5-e686-9eaebd156c0e"
    }
  }];

  const newState = reducer(initialState, testing.fetchItemsSuccess(filterItemsData(data)));
  expect(newState.items).toEqual([{
    description: "Deserunt ut quae architecto error assumenda ",
    price: 17.86,
    availability: 29,
    name: "Voluptatum dolorum atque.",
    uuid: "2aabf825-40b3-03d5-e686-9eaebd156c0e"
  }]);
  expect(newState.loaded).toEqual(true);
});

test('handle the fetchItemsFailure action', () => {
  const initialState = {
    items: [],
    loaded: false,
  };

  const newState = reducer(initialState, testing.fetchItemsFailure('Unable to fetch'));
  expect(newState.items).toEqual([]);
  expect(newState.loaded).toEqual(true);
});

test('handle an unknown action', () => {
  const newState = reducer();
  expect(newState.items).toEqual([]);
  expect(newState.loaded).toEqual(false);
});

test('get the items', () => {
  const itemState = {
    items: [{
      data: {
        type: "item",
        attributes: {
          description: "Deserunt ut quae architecto error assumenda ",
          price: 17.86,
          availability: 29,
          name: "Voluptatum dolorum atque."
        },
        id: "2aabf825-40b3-03d5-e686-9eaebd156c0e",
        links: {
          self: "/items/2aabf825-40b3-03d5-e686-9eaebd156c0e"
        }
      },
      links: {
        self: "/items/2aabf825-40b3-03d5-e686-9eaebd156c0e"
      }
    }],
    loaded: false,
  };

  expect(getItems({items: itemState})).toEqual(itemState.items);
});

test('check if items are loaded', () => {
  const itemState = {
    items: [],
    loaded: true,
  };

  expect(itemsLoaded({items: itemState})).toEqual(true);
});

test('Search items success', done => {
  const data = [{
    data: {
      type: "item",
      attributes: {
        description: "Deserunt ut quae architecto error assumenda ",
        price: 17.86,
        availability: 29,
        name: "Voluptatum dolorum atque."
      },
      id: "2aabf825-40b3-03d5-e686-9eaebd156c0e",
      links: {
        self: "/items/2aabf825-40b3-03d5-e686-9eaebd156c0e"
      }
    },
    links: {
      self: "/items/2aabf825-40b3-03d5-e686-9eaebd156c0e"
    }
  }];
  fetchMock.get(`${testing.base_url}/items/db/?query=deserunt&limit=10`, {
    status: 200,
    body: data,
  });

  const store = mockStore();
  const expectedActions = [
    testing.searchItemSuccess(filterItemsData(data))
  ];

  return store.dispatch(searchItems('deserunt'))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
});

test('Search items failure', done => {
  const url = `${testing.base_url}/items/db/?query=deserunt&limit=10`;
  const errorMessage = `Error while querying the server on ${url}`;
  fetchMock.get(url, { status: 404, body: null, });

  const store = mockStore();
  const expectedActions = [
    testing.searchItemFailure(errorMessage)
  ];

  return store.dispatch(searchItems('deserunt'))
  .then(() => {
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });
});

test('searchItemSuccess action', () => {
  const initialState = testing.initialState;
  const parsedItems = [{
    description: "Deserunt ut quae architecto error assumenda ",
    price: 17.86,
    availability: 29,
    name: "Voluptatum dolorum atque.",
    uuid: "2aabf825-40b3-03d5-e686-9eaebd156c0e"
  }];

  const newState = reducer(initialState, testing.searchItemSuccess(parsedItems));
  expect(newState.searchResults).toEqual(parsedItems);
  expect(newState.searchStatus).toEqual('success');
});

test('searchItemfail action', () => {
  const initialState = testing.initialState;

  const newState = reducer(initialState, testing.searchItemFailure('Error'));
  expect(newState.searchStatus).toEqual('Error');
});

test('emptySearchresults action', () => {
  const initialState = testing.initialState;
  initialState.searchResults = [{
    description: "Deserunt ut quae architecto error assumenda ",
    price: 17.86,
    availability: 29,
    name: "Voluptatum dolorum atque.",
    uuid: "2aabf825-40b3-03d5-e686-9eaebd156c0e"
  }];

  const newState = reducer(initialState, emptySearchResults());
  expect(newState.searchStatus).toEqual('ready');
  expect(newState.searchResults).toEqual([]);
});