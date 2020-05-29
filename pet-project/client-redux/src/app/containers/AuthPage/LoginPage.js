import { login } from '../../services/authService';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/errorActions';
import LoginForm from '../../components/Auth/LoginForm';

const mapStateToProps = state => ({
      isAuthenticated: state.userAuth.isAuthenticated,
      error: state.serverError
});

const mapDispatchToProps = dispatch => ({
      clearError: () => dispatch(clearErrors()),
      login: user => dispatch(login(user)),
});

const LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default LoginPage;