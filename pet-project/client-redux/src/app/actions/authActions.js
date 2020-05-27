import axios from 'axios';
import { returnErrors } from './errorActions';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const AUTH_ERROR = 'AUTH_ERROR';

export const USER_LOADING = 'USER_LOADING';
export const USER_LOADED = 'USER_LOADED';


// check token and load corresponding user
export const loadUser = () => (dispatch, getState) => {
      // user loading
      dispatch({ type: USER_LOADING });

      axios.get('http://localhost:3001/auth/user', tokenConfig(getState))
            .then(res => {
                  dispatch({
                        type: USER_LOADED,
                        payload: res.data
                  });
            }).catch(err => {
                  console.log(err);
                  dispatch(returnErrors(err.response.data, err.response.status));
                  dispatch({ type: AUTH_ERROR });
            });

}

// setup config/headers and token
export const tokenConfig = getState => {
      // get token from localStorage
      const token = getState().auth.token;

      // headers
      const config = {
            headers: {
                  'Content-type': 'application/json'
            }
      }

      // if token, add to headers
      if (token) {
            config.headers['x-auth-token'] = token;
      }

      return config;
}