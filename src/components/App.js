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
    if (screenValue.split('').filter(x => x === '.').length === 1 && number === '.' && !nextValue) {
      return;
    }

    if (nextValue) {
      setFirstValue(screenValue);
      setScreenValue('');
      setNextValue(false);
    }

    if (expressionDone && !operator) {
        reset();  
        setExpressionDone(false);
      }

    setScreenValue(prevState => prevState + number);
  };

  const handleOperator = (operator) => {
    setOperator(operator);
    setNextValue(true);
  }

  const calculate = () => {
      setScreenValue(evaluate(firstValue + operator + screenValue).toString());
      setExpressionDone(true);    
      setFirstValue(null);
      setOperator(null);
  };

  const reset = () => {
    setScreenValue('');
    setFirstValue(null);
    setOperator(null);
    setNextValue(false);
  };

  const changeSign = () => {
    if (screenValue !== '' && screenValue[0] !== '-') {
      setScreenValue(prevState => '-' + prevState);
    } else {
      setScreenValue(prevState => prevState.slice(1));
    }
  };

  const percentage = () => {
    if (screenValue.length !== 0) {
      setScreenValue(prevState => evaluate('(' + prevState + ') / 100').toString());
    }
  };

  return (
    <div className="app">
      {console.log('ScreenValue:', screenValue),
      console.log('FirstValue:', firstValue),
      console.log('Operator:', operator),
      console.log('NextValue:', nextValue),
      console.log('ExpressionDone:', expressionDone),
      console.log('-----------------------------')
      }
      <Display screenValue={screenValue} setScreenValue={setScreenValue}/>
      <ButtonContainer 
        percentage={percentage}
        changeSign={changeSign} 
        reset={reset} 
        handleOperator={handleOperator} 
        handleChange={handleChange} 
        calculate={calculate}/>
    </div>
  );
}

export default App;
