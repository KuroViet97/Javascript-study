export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const REGISTER_STATUS_RESET = 'REGISTER_STATUS_RESET';

export const AUTH_ERROR = 'AUTH_ERROR';

export const USER_LOADING = 'USER_LOADING';
export const USER_LOADED = 'USER_LOADED';

export const loginSuccess = (res) => ({
      type: LOGIN_SUCCESS,
      payload: res.data
});

export const loginFailure = () => ({
      type: LOGIN_FAILURE
});

export const logoutSuccess = () => ({
      type: LOGOUT_SUCCESS
});

export const registerSuccess = (res) => ({
      type: REGISTER_SUCCESS,
      payload: res.data
});

export const registerFailure = () => ({
      type: REGISTER_FAILURE
});


export const authenticateError = () => ({
      type: AUTH_ERROR
});

export const userLoading = () => ({
      type: USER_LOADING
});

export const userLoaded = (res) => ({
      type: USER_LOADED,
      payload: res.data
});
// in case of register successfully, display a green message 
// after that, reset the register status for clearing the message
export const resetRegister = () => ({
      type: REGISTER_STATUS_RESET
});