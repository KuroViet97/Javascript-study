import RegisterForm from '../../components/Auth/RegisterForm';
import { register } from '../../services/authService';
import { resetRegister } from '../../actions/authActions';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/errorActions';

const mapStateToProps = state => ({
      isAuthenticated: state.userAuth.isAuthenticated,
      isRegistered: state.userAuth.isRegistered,
      userEmail: state.userAuth.user ? state.userAuth.user.email : null,
      error: state.serverError
});

const mapDispatchToProps = dispatch => ({
      clearError: () => dispatch(clearErrors()),
      register: user => dispatch(register(user)),
      resetRegister: () => dispatch(resetRegister())
});

const RegisterPage = connect(mapStateToProps, mapDispatchToProps)(RegisterForm);

export default RegisterPage;