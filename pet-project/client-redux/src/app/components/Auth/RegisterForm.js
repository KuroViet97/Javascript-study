import React from 'react';
import PropTypes from 'prop-types';
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
                  formValid: false
            };
      }

      static propTypes = {
            isAuthenticated: PropTypes.func.isRequired,
            error: PropTypes.object.isRequired,
            register: PropTypes.func.isRequired
      }

      //handle user input
      handleInput = (e) => {
            const name = e.target.name;
            const value = e.target.value;
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
                  <form className="login-form">
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
                        <button
                              type="submit"
                              className="btn btn-primary"
                              disabled={!this.state.formValid}
                        >
                              Create Account
                        </button>
                  </form>
            );
      }
}

export default RegisterForm;