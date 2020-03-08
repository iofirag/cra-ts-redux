import React from 'react';
import propTypes from 'prop-types'
import Button from './Button';

const Buttons = (props) => (
  <div>
    <Button operator={props.incrementOperator} onClick={props.increment} />
    <Button operator={props.decrementOperator} onClick={props.decrement} />
  </div>
);

Buttons.propTypes = {
  increment: propTypes.func.isRequired,
  incrementOperator: propTypes.string.isRequired,
  decrement: propTypes.func.isRequired,
  decrementOperator: propTypes.string.isRequired,
}

export default Buttons;