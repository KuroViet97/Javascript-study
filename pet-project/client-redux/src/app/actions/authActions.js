import axios from 'axios';
import { returnErrors } from './errorActions';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const REGISTER_STATUS_RESET = 'REGISTER_STATUS_RESET';

export const AUTH_ERROR = 'AUTH_ERROR';

export const USER_LOADING = 'USER_LOADING';
export const USER_LOADED = 'USER_LOADED';

// in case of register successfully, display a green message 
// after that, reset the register status for clearing the message
export const resetRegister = () => ({
      type: REGISTER_STATUS_RESET
});

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

// register user
export const register = ({ name, email, password }) => dispatch => {
      const user = {
            name: name,
            email: email,
            password: password
      }

      axios.post('http://localhost:3001/users', user)
            .then(res => dispatch({
                  type: REGISTER_SUCCESS,
                  payload: res.data
            }))
            .catch(err => {
                  console.log(err);
                  dispatch(returnErrors(err.response.data, err.response.status, REGISTER_FAILURE));
                  dispatch({
                        type: REGISTER_FAILURE
                  });
            });
};

// login
export const login = ({ email, password }) => dispatch => {
      const user = {
            email: email,
            password: password
      };

      axios.post('http://localhost:3001/auth', user)
            .then(res => dispatch({
                  type: LOGIN_SUCCESS,
                  payload: res.data
            }))
            .catch(err => {
                  console.log(err);
                  dispatch(returnErrors(err.response.data, err.response.status, LOGIN_FAILURE));
                  dispatch({
                        type: LOGIN_FAILURE
                  });
            });
};

// logout
export const logout = () => ({
      type: LOGOUT_SUCCESS
});

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