// ------------------------------------
// Constants

const BASE_URL = 'http://127.0.0.1:5000';

const ITEMS_FETCH_SUCCESS = 'ITEMS_FETCH_SUCCESS';
const ITEMS_FETCH_FAILURE = 'ITEMS_FETCH_FAILURE';

//
export function filterItemsData(items) {
  return items.map((item) => {
    return {...item.data.attributes, uuid: item.data.id};
  });
}


// ------------------------------------
// Action creators

function fetchItemsSuccess(items) {
  return {
    type: ITEMS_FETCH_SUCCESS,
    payload: items
  };
}

function fetchItemsFailure(errmessage) {
  return {
    type: ITEMS_FETCH_FAILURE,
    payload: errmessage,
  };
}

export function fetchItems() {
  return dispatch => {
    return fetch(`${BASE_URL}/items`)
      .then(response => {
        if (!response.ok)
          throw new Error('Unable to fetch');
        return response.json();
      })
      .then(items => dispatch(fetchItemsSuccess(filterItemsData(items))))
      .catch(error => dispatch(fetchItemsFailure(error.message)));
  };
}

// ------------------------------------
// Selectors

export const getItems = state => state.items.items;
export const itemsLoaded = state => state.items.loaded;

// ------------------------------------
// Store & reducer

const initialState = {
  items: [],
  loaded: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
  case ITEMS_FETCH_SUCCESS:
    return {
      ...state,
      items: action.payload,
      loaded: true,
    };
  case ITEMS_FETCH_FAILURE:
    return {
      ...state,
      loaded: true,
    };

  default:
    return state;
  }
}

// ------------------------------------
// Testing variables

export const testing = {
  base_url: BASE_URL,
  fetchItemsSuccess,
  fetchItemsFailure,
};
