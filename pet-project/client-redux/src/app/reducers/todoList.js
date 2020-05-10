//manage add item in todo list and toggle 'complete' for a given todo item
const todoList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    content: action.content,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
        default:
            return state;
    }
}

export default todoList;