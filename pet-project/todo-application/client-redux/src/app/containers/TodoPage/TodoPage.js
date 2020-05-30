import React from 'react';
import AddTodoView from './AddTodoView';
import TodoListView from './TodoListView';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TodoPage extends React.Component {
      componentDidMount() {
            if (!localStorage.getItem('token')) {
                  this.props.history.push('/login');
            }
      }

      static propTypes = {
            isAuthenticated: PropTypes.bool.isRequired
      }

      render() {
            return (
                  <div>
                        <AddTodoView />
                        <TodoListView />
                  </div>
            );
      }
}

const mapStateToProps = state => ({
      isAuthenticated: state.userAuth.isAuthenticated
})

export default connect(mapStateToProps, null)(TodoPage); 