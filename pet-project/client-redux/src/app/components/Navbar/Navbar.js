import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ isAuthenticated, logout }) => {

      const showLoginAndRegister = () => (
            <>
                  <li className="nav-item">
                        <div className="nav-link">
                              <NavLink
                                    className="nav-link fa fa-sign-in"
                                    to={"/login"}
                                    activeStyle={{
                                          textDecoration: "none",
                                          color: 'back'
                                    }}
                              >
                                    &nbsp; Login
                        </NavLink>
                        </div>
                  </li>
                  <li className="nav-item">
                        <div className="nav-link">
                              <NavLink
                                    className="nav-link fa fa-user"
                                    to={"/register"}
                                    activeStyle={{
                                          textDecoration: "none",
                                          color: 'back'
                                    }}
                              >
                                    &nbsp; Register
                        </NavLink>
                        </div>
                  </li>
            </>
      );

      const showLogout = () => (
            <>
                  <li className="nav-item">
                        <div className="nav-link">
                              <NavLink
                                    className="nav-link fa fa-sign-out"
                                    to={"/login"}
                                    onClick={logout}
                              >
                                    &nbsp; Logout
                                    </NavLink>
                        </div>
                  </li>
            </>
      );

      const shouldRenderAuthComponent = () => {
            return isAuthenticated ? showLogout() : showLoginAndRegister()
      };

      return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm fixed-top">
                  <span className="navbar-brand">
                        Todo Application
        </span>
                  <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbar-items"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbar-items">
                        <ul className="navbar-nav ml-auto">
                              <li className="nav-item">
                                    <div className="nav-link">
                                          <NavLink
                                                className="nav-link fa fa-home"
                                                to={"/todo"}
                                                activeStyle={{
                                                      textDecoration: "none",
                                                      color: 'back'
                                                }}
                                          >
                                                &nbsp; Home
                                          </NavLink>
                                    </div>
                              </li>
                              {shouldRenderAuthComponent()}
                        </ul>
                  </div>
            </nav >
      );
};

Navbar.propTypes = {
      isAuthenticated: PropTypes.bool.isRequired,
      logout: PropTypes.func.isRequired
}

export default Navbar;