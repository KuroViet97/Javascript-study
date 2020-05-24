import axios from 'axios';

//refresh a button to update
export const INVALIDATE_TODO = 'INVALIDATE_TODO';

export function invalidateTodo(todos) {
    return {
        type: INVALIDATE_TODO,
        todos
    };
};

//request to get todos
export const REQUEST_TODOS = 'REQUEST_TODOS';

function requestTodos() {
    return {
        type: REQUEST_TODOS,
    }
}

export const RECEIVE_TODOS = 'RECEIVE_TODOS';

//Function to handle received todos. 
//Normally, axios will automatically convert json to data, so no need for mapping json manually here
function receiveTodos(todos) {
    return {
        type: RECEIVE_TODOS,
        todos
    }
}

//thunk action creator
export const fetchTodos = () => (async (dispatch) => {
    dispatch(requestTodos());
    console.log("REQUESTING...");
    try {
        console.log("FETCHING...");
        const response = await axios.get('http://localhost:3001/todos/');
        console.log(response.data);
        dispatch(receiveTodos(response.data));
        console.log("FINISHED FETCHING!");
    } catch (err) {
        console.log(err);
    }
});