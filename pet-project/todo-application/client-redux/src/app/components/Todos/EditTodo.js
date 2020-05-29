import React from 'react';
import PropTypes from 'prop-types';
import { updateTodo, cancelUpdateTodo } from '../../actions/index';
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
                    <div>
                        <input
                            type="text"
                            defaultValue={todo.content}
                            className="input-group"
                            required={true}
                            placeholder="Edit todo task"
                            ref={(node) => (newContent = node)}
                        />
                        <button
                            form="update-todo"
                            type="submit"
                            className="btn btn-primary btn-update btn-margin-left float-right"
                        >
                            <i className="fa fa-check-square" />
                        </button>
                        <button
                            className="btn btn-primary btn-update btn-margin-left float-right"
                            onClick={(event) => {
                                event.preventDefault();
                                dispatch(cancelUpdateTodo(todo._id));
                            }}
                        >
                            <i className="fa fa-minus-square" />
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