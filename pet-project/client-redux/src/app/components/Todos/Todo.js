import React from 'react';
import PropTypes from 'prop-types';
import '../../../App.css';

const Todo = ({ onSave, onComplete, onRemove, onEdit, completed, content }) => {
    const initialState = completed ? ' Done' : ' Not done';
    const [taskStatus, setTaskStatus] = React.useState(initialState);
    React.useEffect(() => {
        setTaskStatus(completed ? ' Done' : ' Not done');
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
                <label className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input position-static"
                        checked={completed}
                        onChange={onComplete}
                    />
                    <span>{taskStatus}</span>
                </label>
            </td>
            <td>
                <button className="btn btn-primary btn-save" onClick={onSave}>
                    <i className="fa fa-check" />
                </button>
                &nbsp;
                <button className="btn btn-primary btn-edit" onClick={onEdit}>
                    <i className="fa fa-pencil" />
                </button>

                &nbsp;
                <button className="btn btn-primary btn-removal" onClick={onRemove}>
                    <i className="fa fa-trash-o" />
                </button>
            </td>
        </tr >
    );
}

Todo.propTypes = {
    onSave: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired,
}

export default Todo;