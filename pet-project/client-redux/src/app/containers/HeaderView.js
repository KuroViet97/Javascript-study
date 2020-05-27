import React from 'react';
import '../..'

const HeaderView = () => (
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm fixed-top">
        <span className="navbar-brand">
            Todo Application
        </span>
        <button
            class="navbar-toggler"
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
                    <a className="nav-link" href="/todo"><span className="fa fa-home"> Home</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/register"><span className="fa fa-user"> Register</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/login"><span className="fa fa-signin"> Login</span></a>
                </li>
            </ul>
        </div>
    </nav >
);

export default HeaderView;