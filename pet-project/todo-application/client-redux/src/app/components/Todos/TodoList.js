import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import RemainingTodos from './RemainingTodos';
import EditTodo from './EditTodo';
import Filters from '../Filter/Filters';
import Spinner from '../SharedUI/Spinner';
class TodoList extends Component {

    componentDidMount() {
        this.props.fetchTodos();
    }

    static propTypes = {
        isDataFetched: PropTypes.bool.isRequired,
        todoList: PropTypes.arrayOf(
            PropTypes.shape({
                _id: PropTypes.string.isRequired,
                completed: PropTypes.bool.isRequired,
                content: PropTypes.string.isRequired
            })
        ),
        remainingTodoList: PropTypes.arrayOf(
            PropTypes.shape({
                _id: PropTypes.string.isRequired,
                completed: PropTypes.bool.isRequired,
                content: PropTypes.string.isRequired
            })
        ),
        toggleTodo: PropTypes.func.isRequired,
        editTodo: PropTypes.func.isRequired,
        fetchTodos: PropTypes.func.isRequired,
        removeTodo: PropTypes.func.isRequired,
        saveTodo: PropTypes.func.isRequired,
    };

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
                {!this.props.isDataFetched ? <Spinner /> :
                    <>
                        <div className="pb-5">
                            <span>
                                <Filters />
                            </span>
                            <span className="float-right">
                                <RemainingTodos
                                    todoList={this.props.remainingTodoList}
                                />
                            </span>
                        </div>
                        {
                            this.props.todoList.length > 0 ?
                                <div className="responsive-table">
                                    <table className="table table-dark table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Task Description</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Options</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {getRenderComponent(this.props.todoList)}
                                        </tbody>
                                    </table>
                                </div>
                                :
                                <h4>Data is empty, please add some todos!</h4>
                        }
                    </>
                }
            </>
        );
    }
}

export default TodoList;