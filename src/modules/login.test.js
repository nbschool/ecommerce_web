import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import {
  fetchLogin,
  fetchLogout,
  testing,
} from './login';

const mockStore = configureMockStore([thunk]);

beforeEach(() => {
  fetchMock.restore();
});

test('fetch login with success', done => {
  const userData = {
    first_name: 'John',
    last_name: 'Doe',
  };
  // jsonapi like structure of what we extract on the action
  const fetchedUserData = {
    data: { attributes: userData }
  };
  fetchMock.post(`${testing.base_url}/auth/login/`, {
    status: 200,
    body: {success: true},
  });
  fetchMock.get(`${testing.base_url}/users/me/`, {
    status: 200, body: fetchedUserData
  });

  const store = mockStore();
  const expectedActions = [
    testing.fetchLoginSuccess(),
    testing.storeUserData(userData),
  ];

  const email = "mario.rossi@email.com";
  const password = "pippo";

  return store.dispatch(fetchLogin(email, password))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
});

test('fetch login failure', done => {
  fetchMock.post(`${testing.base_url}/auth/login/`, {
    status: 401,
    body: {},
  });

  const store = mockStore();
  const expectedActions = [
    testing.fetchLoginFailure(),
  ];

  const email = "mario.rossi@email.com";
  const password = "pippo";

  return store.dispatch(fetchLogin(email, password))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
});

test('fetch logout success', done => {
  fetchMock.post(`${testing.base_url}/auth/logout/`, { status: 200 });
  const store = mockStore();

  const expectedActions = [
    testing.fetchLogoutSuccess()
  ];

  return store.dispatch(fetchLogout())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
});
