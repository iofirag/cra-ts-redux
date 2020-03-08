import React from 'react';
import propTypes from 'prop-types'

const Button = ({operator, onClick}) => (
  <button onClick={onClick}>{operator}</button>
);

Button.propTypes = {
  operator: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired
}

export default Button;