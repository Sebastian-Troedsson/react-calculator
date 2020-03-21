import React from 'react'

function ButtonContainer({ setScreenValue, calculate }) {
  return (
    <div className="button-container">
      <button className="color-gray" onClick={() => setScreenValue('')}>C</button>
      <button className="color-gray" onClick={() => setScreenValue('')}>+/-</button>
      <button className="color-gray" onClick={() => setScreenValue('')}>%</button>
      <button className="color-orange" onClick={() => setScreenValue(prevState => prevState + '/')}>/</button>
      <button className="color-dark" onClick={() => setScreenValue(prevState => prevState + 7)}>7</button>
      <button className="color-dark" onClick={() => setScreenValue(prevState => prevState + 8)}>8</button>
      <button className="color-dark" onClick={() => setScreenValue(prevState => prevState + 9)}>9</button>
      <button className="color-orange" onClick={() => setScreenValue(prevState => prevState + '*')}>X</button>
      <button className="color-dark" onClick={() => setScreenValue(prevState => prevState + 4)}>4</button>
      <button className="color-dark" onClick={() => setScreenValue(prevState => prevState + 5)}>5</button>
      <button className="color-dark" onClick={() => setScreenValue(prevState => prevState + 6)}>6</button>
      <button className="color-orange" onClick={() => setScreenValue(prevState => prevState + '-')}>-</button>
      <button className="color-dark" onClick={() => setScreenValue(prevState => prevState + 1)}>1</button>
      <button className="color-dark" onClick={() => setScreenValue(prevState => prevState + 2)}>2</button>
      <button className="color-dark" onClick={() => setScreenValue(prevState => prevState + 3)}>3</button>
      <button className="color-orange" onClick={() => setScreenValue(prevState => prevState + '+')}>+</button>
      <button className="zero-button color-dark"onClick={() => setScreenValue(prevState => prevState + 0)}>0</button>
      <button className="color-dark" onClick={() => setScreenValue('.')}>.</button>
      <button className="color-orange" onClick={() => calculate()}>=</button>
    </div>
  )
}

export default ButtonContainer
