const todoList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    content: action.content,
                    completed: false,
                    editable: false
                }
            ];

        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });

        case 'EDIT_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    todo.editable = !todo.editable;
                }
                return todo;
            });

        case 'CANCEL_UPDATE_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    todo.editable = !todo.editable;
                }
                return todo;
            });

        case 'UPDATE_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        editable: !todo.editable,
                        content: action.content
                    }
                } else {
                    return todo;
                }
            });

        case 'REMOVE_TODO':
            const newState = [...state];
            return newState.filter(state => state.id !== action.id);

        default:
            return state;
    }
}

export default todoList;