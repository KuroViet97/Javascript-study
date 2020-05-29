import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderView = () => (
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
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink
                            className="nav-link fa fa-sign-out"
                            to={"/logout"}
                            activeStyle={{
                                textDecoration: "none",
                                color: 'back'
                            }}
                        >
                            &nbsp; Logout
                        </NavLink>
                    </div>
                </li>
            </ul>
        </div>
    </nav >
);

export default HeaderView;