import { addTodo } from '../../actions/asyncActions';
import { connect } from 'react-redux';
import AddTodo from '../../components/Todos/AddTodo';

const mapDispatchToProps = dispatch => ({
    addTodo: content => dispatch(addTodo(content))
})

const AddTodoView = connect(null, mapDispatchToProps)(AddTodo);
export default AddTodoView;