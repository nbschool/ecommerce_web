import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import reducer, {
  fetchLogin,
  testing,
} from './login';

const mockStore = configureMockStore([thunk]);

beforeEach(() => {
  fetchMock.restore();
});

test('fetch login with success', done => {

  fetchMock.post(`${testing.base_url}/auth/login/`, {
    status: 200,
    body: {success: true},
  });
  const store = mockStore();
  const expectedActions = [
    testing.fetchLoginSuccess(),
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
    testing.fetchLoginFailure('Unable to login'),
  ];

  const email = "mario.rossi@email.com";
  const password = "pippo";

  return store.dispatch(fetchLogin(email, password))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
});

