import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const Link = ({ active, children, onClick }) => (
  <button
    className="waves-effect waves-light btn btn-large btn-margin-left"
    onClick={onClick}
    disabled={active}
  >
    {children}
  </button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link;