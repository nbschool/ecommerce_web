// ------------------------------------
// Constants

const BASE_URL = '127.0.0.1:5000';

const LOGIN_FETCH_SUCCESS = 'LOGIN_FETCH_SUCCESS';
const LOGIN_FETCH_FAILURE = 'LOGIN_FETCH_FAILURE';

//
export function filterItemsData(items) {
  return items.map((item) => {
    return {...item.data.attributes, uuid: item.data.id};
  });
}


// ------------------------------------
// Action creators

function fetchLoginSuccess() {
  return {
    type: LOGIN_FETCH_SUCCESS,
  };
}

function fetchLoginFailure(errmessage) {
  return {
    type: LOGIN_FETCH_FAILURE,
    payload: errmessage,
  };
}

export function fetchLogin(email, password) {
  return dispatch => {
    return fetch(`${BASE_URL}/auth/login/`, { 
      method: 'post',
      mode: 'cors',
      credentials: 'include',
      headers: {
       'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
    .then(response => {
      if(!response.ok)
        throw new Error('Unable to login');
      return response.json();
    })
    .then(() => dispatch(fetchLoginSuccess()))
    .catch(error => dispatch(fetchLoginFailure(error.message)));
  };
}

// ------------------------------------
// Selectors

export const logged = state => state.logged;
export const error = state => state.error;

// ------------------------------------
// Store & reducer

const initialState = {
  logged: false,
  error: 'Login request has not started yet',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
  case LOGIN_FETCH_SUCCESS:
    return {
      ...state,
      logged: true,
    };
  case LOGIN_FETCH_FAILURE:
    return {
      ...state,
      logged: false,
      error: action.payload,
    };
  default:
    return state;
  }
}

// ------------------------------------
// Testing variables

export const testing = {
  base_url: BASE_URL,
  fetchLoginSuccess,
  fetchLoginFailure,
};
