import React from 'react';
import PropTypes from 'prop-types';

let AddTodo = ({ addTodo }) => {
    let input;

    return (
        <div>
            <form
                onSubmit={event => {
                    event.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    addTodo(input.value);
                    input.value = '';
                }}
            >
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button className="btn btn-primary" type="submit">Add Todo</button>
                    </div>
                    <input
                        className="form-control"
                        ref={node => (input = node)}
                        placeholder="Add a todo here" />
                </div>
            </form>
        </div >
    );
};

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;