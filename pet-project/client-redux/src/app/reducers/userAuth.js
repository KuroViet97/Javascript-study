import {
      LOGIN_SUCCESS,
      LOGIN_FAILURE,
      LOGOUT_SUCCESS,
      REGISTER_SUCCESS,
      REGISTER_FAILURE,
      AUTH_ERROR,
      USER_LOADING,
      USER_LOADED,
      REGISTER_STATUS_RESET
} from '../actions/authActions';

const initialState = {
      token: localStorage.getItem('token'),
      isAuthenticated: false,
      isRegistered: false,
      isLoading: false,
      user: null,
};

const userAuth = (state = initialState, action) => {
      switch (action.type) {
            case USER_LOADING:
                  return {
                        ...state,
                        isRegistered: false,
                        isLoading: true
                  };
            case USER_LOADED:
                  return {
                        ...state,
                        isAuthenticated: true,
                        isRegistered: false,
                        isLoading: false,
                        user: action.payload.user
                  };
            case LOGIN_SUCCESS:
                  localStorage.setItem('token', action.payload.token);
                  return {
                        token: localStorage.getItem('token'),
                        isRegistered: false,
                        user: action.payload.user,
                        isAuthenticated: true,
                        isLoading: false
                  };
            case REGISTER_SUCCESS:
                  localStorage.setItem('token', action.payload.token);
                  return {
                        token: localStorage.getItem('token'),
                        isRegistered: true,
                        user: action.payload.user,
                        isAuthenticated: true,
                        isLoading: false
                  };
            case AUTH_ERROR:
            case LOGIN_FAILURE:
            case LOGOUT_SUCCESS:
            case REGISTER_FAILURE:
                  localStorage.removeItem('token');
                  return {
                        isRegistered: false,
                        token: null,
                        user: null,
                        isAuthenticated: false,
                        isLoading: false
                  };
            case REGISTER_STATUS_RESET:
                  return {
                        ...state,
                        isRegistered: false
                  };
            default:
                  return state;
      }
};

export default userAuth;