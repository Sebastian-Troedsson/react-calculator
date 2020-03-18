import React from 'react'

function ButtonContainer({ setScreenValue, calculate }) {
  return (
    <div className="button-container">
      <button onClick={() => setScreenValue(prevState => prevState + 9)}>9</button>
      <button onClick={() => setScreenValue(prevState => prevState + 8)}>8</button>
      <button onClick={() => setScreenValue(prevState => prevState + 7)}>7</button>
      <button onClick={() => setScreenValue(prevState => prevState + 6)}>6</button>
      <button onClick={() => setScreenValue(prevState => prevState + 5)}>5</button>
      <button onClick={() => setScreenValue(prevState => prevState + 4)}>4</button>
      <button onClick={() => setScreenValue(prevState => prevState + 3)}>3</button>
      <button onClick={() => setScreenValue(prevState => prevState + 2)}>2</button>
      <button onClick={() => setScreenValue(prevState => prevState + 1)}>1</button>
      <button onClick={() => setScreenValue(prevState => prevState + 0)}>0</button>
      <button onClick={() => setScreenValue(prevState => prevState + '+')}>+</button>
      <button onClick={() => setScreenValue(prevState => prevState + '-')}>-</button>
      <button onClick={() => setScreenValue(prevState => prevState + '*')}>*</button>
      <button onClick={() => setScreenValue(prevState => prevState + '/')}>/</button>
      <button onClick={() => calculate()}>=</button>
      <button onClick={() => setScreenValue('')}>C</button>
    </div>
  )
}

export default ButtonContainer
