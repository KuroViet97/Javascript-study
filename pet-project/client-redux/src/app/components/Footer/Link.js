import React from 'react';
import PropTypes from 'prop-types';
import '../../../App.css';
import { NavLink } from 'react-router-dom';

const Link = ({ active, filter, children, onClick }) => (
  <NavLink
    exact
    to={filter === 'SHOW_ALL' ? '/' : `/${filter}`}
    activeStyle={{
      textDecoration: 'none',
      color: 'back'
    }}
  >
    <button
      className="waves-effect waves-light btn btn-large btn-margin-left"
      onClick={onClick}
      disabled={active}
    >
      {children}
    </button>
  </NavLink>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link;