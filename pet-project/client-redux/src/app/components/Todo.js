import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const Todo = ({ onSave, onComplete, onRemove, onEdit, completed, content }) => {
    const initialState = completed ? 'Done' : 'Not done';
    const [taskStatus, setTaskStatus] = React.useState(initialState);
    React.useEffect(() => {
        setTaskStatus(completed ? 'Done' : 'Not done');
    }, [completed]);

    return (
        <tr>
            <td
                style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }}
            >
                {content}
            </td >
            <td>
                <label>
                    <input
                        type="checkbox"
                        className="filled-in"
                        checked={completed}
                        onChange={onComplete}
                    />
                    <span>{taskStatus}</span>
                </label>
            </td>
            <td>
                <button className="waves-effect waves-light btn btn-save" onClick={onSave}>
                    <i className="material-icons">
                        save
                    </i>
                </button>
                &nbsp;
                <button className="waves-effect waves-light btn btn-edit" onClick={onEdit}>
                    <i className="material-icons">
                        edit
                            </i>
                </button>
                &nbsp;
                <button className="waves-effect waves-light btn btn-removal" onClick={onRemove}>
                    <i className="material-icons">
                        delete
                            </i>
                </button>
            </td>
        </tr >
    );
}

Todo.propTypes = {
    onComplete: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired
}

export default Todo;