/**
 * Presentation and logic for the component are mixed. Thus,
 * it is put into container folder
 */
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <>
            <form
                onSubmit={event => {
                    event.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(addTodo(input.value));
                    input.value = '';
                }}
            >
                <div className="row">
                    <div className="input-field col s3 push-s7">
                        <span className="flow-text">
                            <button
                                className="waves-effect waves-light btn-large"
                                type="submit">
                                Add Todo
                            </button>
                        </span>
                    </div>
                    <div className="input-field col s4">
                        <span className="flow-text">
                            <input
                                ref={node => (input = node)}
                                placeholder="Add a todo here"
                            />
                        </span>
                    </div>
                </div>
            </form>
        </>
    );
};

export default connect()(AddTodo);