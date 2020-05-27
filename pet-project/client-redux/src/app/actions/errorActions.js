export const GET_ERRORS = 'GET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// return errors
export const returnErrors = (message, status, id = null) => ({
      type: GET_ERRORS,
      payload: { message, status, id }
});

// clear errors
export const clearErrors = () => ({
      type: CLEAR_ERRORS
});