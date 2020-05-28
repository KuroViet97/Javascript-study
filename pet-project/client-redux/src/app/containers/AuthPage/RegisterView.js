import RegisterForm from '../../components/Auth/RegisterForm';
import { register } from '../../actions/authActions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
      isAuthenticated: state.auth.isAuthenticated,
      error: state.serverError
});

const mapDispatchToProps = dispatch => ({
      register: dispatch(register())
});

const RegisterView = connect(mapStateToProps, mapDispatchToProps)(RegisterForm);

export default RegisterView;