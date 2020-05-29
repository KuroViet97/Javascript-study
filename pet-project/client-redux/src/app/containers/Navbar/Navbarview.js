import { logoutSuccess } from '../../actions/authActions';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';

const mapStateToProps = state => ({
      isAuthenticated: state.userAuth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
      logout: () => dispatch(logoutSuccess())
});

const Navbarview = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default Navbarview;