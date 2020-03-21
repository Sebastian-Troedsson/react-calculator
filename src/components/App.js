import React, { useState } from 'react';
import Display from './Display';
import ButtonContainer from './ButtonContainer';
import { evaluate } from 'mathjs';
import './App.css';

function App() {
  const [screenValue, setScreenValue] = useState('');

  const calculate = () => {
    try {
      setScreenValue(evaluate(screenValue).toString());
    } catch (error) {
      console.log('invalid expression');
    }
  };

  return (
    <div className="app">
      <Display screenValue={screenValue} setScreenValue={setScreenValue}/>
      <ButtonContainer setScreenValue={setScreenValue} calculate={calculate}/>
    </div>
  );
}

export default App;
