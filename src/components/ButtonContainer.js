import React from 'react'

function ButtonContainer({ handleChange, handleOperator, calculate, reset, changeSign }) {
  return (
    <div className="button-container">
      <button className="color-gray" onClick={() => reset()}>C</button>
      <button className="color-gray" onClick={() => changeSign()}>+/-</button>
      <button className="color-gray" >%</button>
      <button className="color-orange" onClick={() => handleOperator('/')}>/</button>
      <button className="color-dark" onClick={() => handleChange('7')}>7</button>
      <button className="color-dark" onClick={() => handleChange('8')}>8</button>
      <button className="color-dark" onClick={() => handleChange('9')}>9</button>
      <button className="color-orange" onClick={() => handleOperator('*')}>X</button>
      <button className="color-dark" onClick={() => handleChange('4')}>4</button>
      <button className="color-dark" onClick={() => handleChange('5')}>5</button>
      <button className="color-dark" onClick={() => handleChange('6')}>6</button>
      <button className="color-orange" onClick={() => handleOperator('-')}>-</button>
      <button className="color-dark" onClick={() => handleChange('1')}>1</button>
      <button className="color-dark" onClick={() => handleChange('2')}>2</button>
      <button className="color-dark" onClick={() => handleChange('3')}>3</button>
      <button className="color-orange" onClick={() => handleOperator('+')}>+</button>
      <button className="zero-button color-dark"onClick={() => handleChange('0')}>0</button>
      <button className="color-dark" onClick={() => handleChange('.')}>.</button>
      <button className="color-orange" onClick={() => calculate()}>=</button>
    </div>
  )
}

export default ButtonContainer
