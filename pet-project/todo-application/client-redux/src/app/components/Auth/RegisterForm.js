import React from 'react';
import PropTypes from 'prop-types';
import { REGISTER_FAILURE } from '../../actions/authActions';
class RegisterForm extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  name: '',
                  email: '',
                  password: '',
                  formErrors: { name: '', email: '', password: '' },
                  nameValid: false,
                  emailValid: false,
                  passwordValid: false,
                  formValid: false,
                  serverMessage: null,
            };
      }

      static propTypes = {
            isAuthenticated: PropTypes.bool.isRequired,
            isRegistered: PropTypes.bool.isRequired,
            error: PropTypes.object.isRequired,
            register: PropTypes.func.isRequired,
            clearError: PropTypes.func.isRequired,
            resetRegister: PropTypes.func.isRequired,
            userEmail: PropTypes.string
      }

      componentDidUpdate(prevProps) {
            const { error } = this.props;
            if (error !== prevProps.error) {
                  // check for register error
                  if (error.id === REGISTER_FAILURE) {
                        this.setState({
                              serverMessage: error.message.message,
                        });
                  } else {
                        this.setState({
                              serverMessage: null
                        });
                  }
            }
      }

      componentWillUnmount() {
            if (this.props.isRegistered) {
                  this.props.resetRegister();
            }
      }

      handleSubmit = event => {
            event.preventDefault();
            this.props.clearError();
            this.props.resetRegister();
            this.setState({
                  serverInfoMessage: null
            });

            const { name, email, password } = this.state;

            const newUser = {
                  name,
                  email,
                  password
            };

            // call api to register
            this.props.register(newUser);
            this.resetForm();
      };

      resetForm() {
            this.setState({
                  name: '',
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
            let nameValid = this.state.nameValid;
            let emailValid = this.state.emailValid;
            let passwordValid = this.state.passwordValid;
            switch (fieldName) {
                  case 'name':
                        nameValid = value.match(/^(?=[a-zA-Z ]{2,30}$)[A-Z][a-z]+(?:[ ]+[a-zA-Z][a-z]+)*$/);
                        fieldValidationErrors.name = nameValid ? '' : ' is invalid';
                        break;
                  case 'email':
                        emailValid = value.match(/^([\w.]+)@([\w-]+\.)+([\w]{2,})$/i);
                        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                        break;
                  case 'password':
                        passwordValid = value.length >= 6;
                        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                        break;
                  default:
                        break;
            }

            this.setState({
                  formErrors: fieldValidationErrors,
                  nameValid: nameValid,
                  emailValid: emailValid,
                  passwordValid: passwordValid
            }, this.validateForm);
      }

      // validate the whole form 
      validateForm() {
            this.setState({
                  formValid: this.state.emailValid && this.state.nameValid && this.state.passwordValid
            });
      };

      // same as cross the completed todo
      errorClass(fieldValue, error) {
            if (fieldValue.length > 0 && error.length === 0) {
                  return 'is-valid';
            } else if (fieldValue.length > 0 && error.length > 0) {
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
                        <h2>Create an account</h2>
                        <div className="form-group">
                              <label htmlFor="name">Name</label>
                              <input
                                    type="text"
                                    required
                                    className={`form-control  ${this.errorClass(this.state.name, this.state.formErrors.name)}`}
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={this.state.name}
                                    onChange={this.handleInput}
                              />
                              {this.showError('name')}
                        </div>
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
                                    Create Account
                        </button>
                              {this.state.serverMessage && !this.props.isRegistered ?
                                    <div className="text-danger">
                                          {this.state.serverMessage}
                                    </div>
                                    : null
                              }

                              {this.props.isRegistered ?
                                    <div className="text-success">
                                          Email registered: {this.props.userEmail}
                                    </div>
                                    : null
                              }
                        </div>
                  </form>
            );
      }
}

export default RegisterForm;