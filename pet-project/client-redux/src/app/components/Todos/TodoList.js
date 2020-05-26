import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import RemainingTodos from './RemainingTodos';
import EditTodo from './EditTodo';
import store from '../../../index';

class TodoList extends Component {

    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        const renderTodo = (todo) => (
            <Todo
                key={todo._id}
                {...todo}
                onComplete={() => this.props.toggleTodo(todo._id)}
                onRemove={() => this.props.removeTodo(todo._id)}
                onEdit={() => this.props.editTodo(todo._id)}
                onSave={() => this.props.saveTodo(todo)}
            />
        );

        const renderEditTodo = (todo) => (
            <EditTodo
                todo={todo}
                key={todo._id}
            />
        );

        const getRenderComponent = (todoList) => (
            todoList.map(todo => (
                todo.editable ? renderEditTodo(todo) : renderTodo(todo))
            )
        );

        return (
            <>
                {!store.getState().asyncTodoList.isFetched ? <p>Fetching...</p> :
                    <>
                        <RemainingTodos
                            todoList={this.props.remainingTodoList}
                        />
                        {
                            this.props.todoList.length > 0 ?
                                <table className="responsive-table">
                                    <thead className="centered">
                                        <tr>
                                            <th>Task Description</th>
                                            <th>Status</th>
                                            <th>Options</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getRenderComponent(this.props.todoList)}
                                    </tbody>
                                </table>
                                :
                                <h4>Data is empty, please add some todos!</h4>
                        }
                    </>
                }
            </>
        );
    }
}

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
            content: PropTypes.string.isRequired
        })
    ),
    toggleTodo: PropTypes.func.isRequired
};

export default TodoList;