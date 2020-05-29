import React from 'react';
import PropTypes from 'prop-types';
import { LOGIN_FAILURE } from '../../actions/authActions';

class LoginForm extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  email: '',
                  password: '',
                  formErrors: { email: '', password: '' },
                  emailValid: false,
                  passwordValid: false,
                  formValid: false,
                  serverMessage: null,
            };


      }

      static propTypes = {
            isAuthenticated: PropTypes.bool.isRequired,
            error: PropTypes.object.isRequired,
            login: PropTypes.func.isRequired,
            clearError: PropTypes.func.isRequired,
      }

      routeChange = () => {
            if (this.props.isAuthenticated) {
                  this.props.history.push('/todo');
                  return;
            }
            return;
      }

      componentDidUpdate(prevProps) {
            const { error } = this.props;
            if (error !== prevProps.error) {
                  // check for register error
                  if (error.id === LOGIN_FAILURE) {
                        this.setState({
                              serverMessage: error.message.message,
                        });
                  } else {
                        this.setState({
                              serverMessage: null
                        });
                  }
            }
            this.routeChange();
      }

      handleSubmit = event => {
            event.preventDefault();
            this.props.clearError();
            this.setState({
                  serverInfoMessage: null
            });

            const { email, password } = this.state;
            const user = {
                  email,
                  password
            };

            // call api to register
            this.props.login(user);
      };

      resetForm() {
            this.setState({
                  email: '',
                  password: ''
            });
      }

      //handle user input
      handleInput = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            this.setState({ [name]: value },
                  () => { this.validateField(name, value) });
      }

      // validate field 
      validateField(fieldName, value) {
            let fieldValidationErrors = this.state.formErrors;
            let emailValid = this.state.emailValid;
            let passwordValid = this.state.passwordValid;
            switch (fieldName) {
                  case 'email':
                        emailValid = value.match(/^([\w.]+)@([\w-]+\.)+([\w]{2,})$/i);
                        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                        break;
                  case 'password':
                        passwordValid = value.length >= 6;
                        fieldValidationErrors.password = passwordValid ? '' : ' you sure it is this short?';
                        break;
                  default:
                        break;
            }

            this.setState({
                  formErrors: fieldValidationErrors,
                  emailValid: emailValid,
                  passwordValid: passwordValid
            }, this.validateForm);
      }

      // validate the whole form 
      validateForm() {
            this.setState({
                  formValid: this.state.emailValid && this.state.passwordValid
            });
      };

      // same as cross the completed todo
      errorClass(fieldValue, error) {
            if (fieldValue.length > 0 && error.length > 0) {
                  return 'is-invalid';
            }
            return;
      }

      showError(fieldName) {
            if (this.state.formErrors[fieldName].length > 0) {
                  return (
                        <div className="invalid-feedback">
                              {fieldName} {this.state.formErrors[fieldName]}
                        </div>
                  );
            }
            return;
      }

      render() {
            return (
                  <form onSubmit={this.handleSubmit} className="simple-form">
                        <h2>Please login to use application</h2>
                        <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <input
                                    type="email"
                                    required
                                    className={`form-control  ${this.errorClass(this.state.email, this.state.formErrors.email)}`}
                                    name="email"
                                    placeholder="Enter your email address"
                                    value={this.state.email}
                                    onChange={this.handleInput}
                              />
                              {this.showError('email')}
                        </div>
                        <div className="form-group">
                              <label htmlFor="password">Password</label>
                              <input
                                    type="password"
                                    required
                                    className={`form-control  ${this.errorClass(this.state.password, this.state.formErrors.password)}`}
                                    name="password"
                                    placeholder="Password must be more than 5 characters"
                                    value={this.state.password}
                                    onChange={this.handleInput}
                              />
                              {this.showError('password')}
                        </div>
                        <div className="text-center">
                              <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={!this.state.formValid}
                              >
                                    Login
                        </button>
                              {this.state.serverMessage ?
                                    <div className="text-danger">
                                          {this.state.serverMessage}
                                    </div>
                                    : null
                              }
                        </div>
                  </form>
            );
      }
}

export default LoginForm;