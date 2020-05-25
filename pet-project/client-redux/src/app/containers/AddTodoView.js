import AddTodo from '../components/AddTodo';
import { addTodo } from '../actions/actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    addTodo: content => dispatch(addTodo(content))
})

const AddTodoView = connect(null, mapDispatchToProps)(AddTodo);
export default AddTodoView;