import React from 'react';
import PropTypes from 'prop-types';
import { updateTodo, cancelUpdateTodo } from '../actions/index';
import { connect } from 'react-redux';

//must declare as "let" for updating, freaking bug for half of a day (_ _)
let EditTodo = ({ todo, dispatch }) => {
    let newContent;

    return (
        <tr>
            <td>
                <form id="update-todo" onSubmit={event => {
                    event.preventDefault();
                    if (!newContent.value.trim()) {
                        return;
                    }
                    dispatch(updateTodo(todo._id, newContent.value));
                }}>
                    <input
                        type="text"
                        defaultValue={todo.content}
                        required={true}
                        placeholder="Edit todo task"
                        ref={(node) => (newContent = node)}
                    />
                    <div className="right">
                        <button
                            form="update-todo"
                            type="submit"
                            className="waves-effect waves-light btn btn-update btn-margin-left"
                        >
                            <i className="material-icons">check</i>
                        </button>
                        <button
                            className="waves-effect waves-light btn btn-update btn-margin-left"
                            onClick={(event) => {
                                event.preventDefault();
                                dispatch(cancelUpdateTodo(todo._id));
                            }}
                        >
                            <i className="material-icons">remove</i>
                        </button>
                    </div>
                </form>
            </td >
        </tr >
    );
};

EditTodo.propTypes = {
    todo: PropTypes.object.isRequired
}

export default connect()(EditTodo);