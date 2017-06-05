// ------------------------------------
// Constants

const BASE_URL = 'http://127.0.0.1:5000';

const ITEMS_FETCH_SUCCESS = 'ITEMS_FETCH_SUCCESS';
const ITEMS_FETCH_FAILURE = 'ITEMS_FETCH_FAILURE';
const PICTURE_FETCH_SUCCESS = 'PICTURE_FETCH_SUCCESS';
const PICTURE_FETCH_FAILURE = 'PICTURE_FETCH_FAILURE';
const UPDATE_CART = 'UPDATE_CART';


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

function fetchPictureSuccess(picture) {
  return {
    type: PICTURE_FETCH_SUCCESS,
    payload: picture
  };
}

function fetchPictureFailure(errmessage) {
  return {
    type: PICTURE_FETCH_FAILURE,
    payload: errmessage,
  };
}

export function setCart(uuid, price, numItems) {
  return {
    type: UPDATE_CART,
    payload: {
      uuid: uuid,
      price: price,
      numItems: numItems,
    }
  };
}

function fetchPicture(uuid) {
  return dispatch => {
    return fetch(`${BASE_URL}/items/${uuid}/pictures`)
      .then(response => {
        if (!response.ok)
          throw new Error('Unable to fetch');
        return response.json();
      })
      .then(picture => dispatch(fetchPictureSuccess(picture)))
      .catch(error => dispatch(fetchPictureFailure(error.message)));
  };
}

function addPictureToItem(picture, items) {
  /*
    This method get the picture and all the items
    returning the items updated with pictureId and pictureUrl
    of the fetched picture
  */
  for (const item of items) {
    const itemPictureId = picture[0].data.relationships.item.data.id;
    if (itemPictureId === item.uuid) {
      item.pictureId = picture[0].data.id;
      item.pictureUrl = `${BASE_URL}/pictures/${picture[0].data.id}`;
      break;
    }
  }
  return [...items];
}

export function fetchItems() {
  return dispatch => {
    return fetch(`${BASE_URL}/items`)
      .then(response => {
        if (!response.ok)
          throw new Error('Unable to fetch');
        return response.json();
      })
      .then(items => {
        const actions = [];
        for (const item of items) {
          item.pictureId = '';
          item.pictureUrl = null;
          actions.push(dispatch(fetchPicture(item.data.id)));
        }
        actions.push(dispatch(fetchItemsSuccess(filterItemsData(items))));
        return actions;
      })
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
  cart: {},
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
  case PICTURE_FETCH_SUCCESS:
    return {
      ...state,
      items: addPictureToItem(action.payload, state.items),
    };
  case UPDATE_CART:
    return {
      ...state,
      cart: {
        ...state.cart,
        [action.payload.uuid]: {...action.payload}
      },
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
  fetchPictureSuccess,
  fetchPictureFailure
};
