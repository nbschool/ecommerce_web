import { credentialParams } from './utils';

// ------------------------------------
// Constants

const BASE_URL = 'http://127.0.0.1:5000';

const LOGIN_FETCH_SUCCESS = 'LOGIN_FETCH_SUCCESS';
const LOGIN_FETCH_FAILURE = 'LOGIN_FETCH_FAILURE';
const LOGOUT_FETCH_SUCCESS = 'LOGOUT_FETCH_SUCCESS';
const LOGOUT_FETCH_FAILURE = 'LOGOUT_FETCH_FAILURE';


// ------------------------------------
// Action creators

function fetchLoginSuccess() {
  return {
    type: LOGIN_FETCH_SUCCESS,
  };
}

function fetchLoginFailure() {
  return {
    type: LOGIN_FETCH_FAILURE,
  };
}

function fetchLogoutSuccess() {
  return {
    type: LOGOUT_FETCH_SUCCESS,
  };
}

function fetchLogoutFailure() {
  return {
    type: LOGOUT_FETCH_FAILURE,
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
        email: email,
        password: password,
      }),
      ...credentialParams,
    })
    .then(response => {
      if (!response.ok)
        throw new Error('Unable to login');
    })
    .then(() => dispatch(fetchLoginSuccess()))
    .catch(() => dispatch(fetchLoginFailure()));
  };
}

export function fetchLogout() {
  return dispatch => {
    return fetch(`${BASE_URL}/auth/logout/`, {
      method: 'post',
      ...credentialParams
    })
    .then(response => {
      if (!response.ok)
        throw new Error('Unable to login');
    })
    .then(() => dispatch(fetchLogoutSuccess()))
    .catch(() => dispatch(fetchLogoutFailure()));
  };
}

// ------------------------------------
// Selectors

export const logged = state => state.login.logged;

// ------------------------------------
// Store & reducer

const initialState = {
  logged: false,
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
    };
  case LOGOUT_FETCH_SUCCESS:
    return {
      ...state,
      logged: false,
    };
  case LOGOUT_FETCH_FAILURE:
    return state;
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
