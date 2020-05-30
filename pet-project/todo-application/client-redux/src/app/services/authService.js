import {
      userLoading,
      userLoaded,
      authenticateError,
      registerSuccess,
      registerFailure,
      loginSuccess,
      loginFailure,
      LOGIN_FAILURE,
      REGISTER_FAILURE,
} from '../actions/authActions';

import { returnErrors } from '../actions/errorActions';

import axios from 'axios';
// check token and load corresponding user
export const loadUser = () => (dispatch, getState) => {
      // user loading
      dispatch(userLoading());

      axios.get('/api/auth/user', tokenConfig(getState))
            .then(res => {
                  dispatch(userLoaded(res));
            }).catch(err => {
                  console.log(err);
                  dispatch(returnErrors(err.response.data, err.response.status));
                  dispatch(authenticateError());
            });

}

// register user
export const register = ({ name, email, password }) => dispatch => {
      const user = {
            name: name,
            email: email,
            password: password
      }

      axios.post('/api/users', user)
            .then(res => dispatch(registerSuccess(res)))
            .catch(err => {
                  console.log(err);
                  dispatch(returnErrors(err.response.data, err.response.status, REGISTER_FAILURE));
                  dispatch(registerFailure());
            });
};

// login
export const login = ({ email, password }) => dispatch => {
      const user = {
            email: email,
            password: password
      };

      axios.post('/api/auth', user)
            .then(res => dispatch(loginSuccess(res)))
            .catch(err => {
                  console.log(err);
                  dispatch(returnErrors(err.response.data, err.response.status, LOGIN_FAILURE));
                  dispatch(loginFailure());
            });
};

// setup config/headers and token
export const tokenConfig = getState => {
      // get token from localStorage
      const token = getState().userAuth.token;

      // headers
      const config = {
            headers: {

            }
      }

      // if token, add to headers
      if (token) {
            config.headers['x-auth-token'] = token;
      }

      console.log("Config " + config.headers['x-auth-token']);
      return config;
}