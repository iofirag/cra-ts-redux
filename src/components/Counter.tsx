import Buttons from "./Buttons"
import React from "react"
import propTypes from 'prop-types'


const Counter = (props) => (
  <p>
    Clicked: {props.value} times
    {' '}
    <Buttons 
      increment={props.increment}
      incrementOperator='+' 
      decrement={props.decrement} 
      decrementOperator='-'
    />
  </p>
)

Counter.propTypes = {
  value: propTypes.string.isRequired,
  increment: propTypes.func.isRequired,
  decrement: propTypes.func.isRequired
}

export default Counter;