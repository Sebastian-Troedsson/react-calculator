import React, { useState } from 'react';
import Display from './Display';
import ButtonContainer from './ButtonContainer';
import { evaluate } from 'mathjs';
import './App.css';

function App() {
  const [screenValue, setScreenValue] = useState('');
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [nextValue, setNextValue] = useState(false);
  const [expressionDone, setExpressionDone] = useState(false);

  const handleChange = (number) => {
    if (expressionDone && !operator) {
      reset();
      setExpressionDone(false);
    }
    if (nextValue) {
      setFirstValue(screenValue);
      setScreenValue('');
      setNextValue(false);
    }
    setScreenValue(prevState => prevState + number);
  };

  const handleOperator = (operator) => {
    setOperator(operator);
    setNextValue(true);
  }

  const calculate = () => {
    try {
      setScreenValue(evaluate(firstValue + operator + screenValue).toString());
      setExpressionDone(true);    
      setFirstValue(null);
      setOperator(null);
      /* Reset */
    } catch (error) {
      console.log(error);
    }
  };

  const reset = () => {
    setScreenValue('');
    setFirstValue(null);
    setOperator(null);
    setNextValue(false);
  }

  const changeSign = () => {
    if (screenValue !== '' && screenValue[0] !== '-') {
      setScreenValue(prevState => '-' + prevState);
    } else {
      setScreenValue(prevState => prevState.slice(1));
    }
  }

  return (
    <div className="app">
      {/* {console.log('ScreenValue:', screenValue),
      console.log('FirstValue:', firstValue),
      console.log('Operator:', operator),
      console.log('NextValue:', nextValue),
      console.log('ExpressionDone:', expressionDone),
      console.log('-----------------------------')
      } */}
      <Display screenValue={screenValue} setScreenValue={setScreenValue}/>
      <ButtonContainer changeSign={changeSign} reset={reset} handleOperator={handleOperator} handleChange={handleChange} calculate={calculate}/>
    </div>
  );
}

export default App;
