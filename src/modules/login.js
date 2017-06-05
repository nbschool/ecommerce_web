import crendetialParams from './utils';

// ------------------------------------
// Constants

const BASE_URL = 'http://127.0.0.1:5000';

const LOGIN_FETCH_SUCCESS = 'LOGIN_FETCH_SUCCESS';
const LOGIN_FETCH_FAILURE = 'LOGIN_FETCH_FAILURE';

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
      headers: {
       'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'email': email,
        'password': password,
      }),
      ...crendetialParams
    })
    .then(response => {
      if(!response.ok)
        throw new Error('Unable to login');
    })
    .then(() => dispatch(fetchLoginSuccess()))
    .catch(error => dispatch(fetchLoginFailure(error.message)));
  };
}

// ------------------------------------
// Selectors

export const logged = state => state.login.logged;
export const error = state => state.login.error;

// ------------------------------------
// Store & reducer

const initialState = {
  logged: false,
  error: '',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
  case LOGIN_FETCH_SUCCESS:
    return {
      ...state,
      logged: true,
      error: '',
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
