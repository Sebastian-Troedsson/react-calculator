import React, { useState } from 'react';
import Display from './Display';
import ButtonContainer from './ButtonContainer';
import './App.css';

function App() {
  const [screenValue, setScreenValue] = useState('');

  const calculate = () => {
    if (/^\d+[-+*/]\d+$/.test(screenValue)) {
      const a = parseInt(screenValue.match(/^\d+/)[0]);
      const b = parseInt(screenValue.match(/\d+$/)[0]);
      const operator = screenValue.match(/[-+*/]/)[0];

      switch (operator) {
        case '+':
          setScreenValue((a + b).toString());
          break;
        case '-':
          setScreenValue((a - b).toString());
          break;
        case '*':
          setScreenValue((a * b).toString());
          break;
        case '/':
          setScreenValue((a / b).toString());
          break;
        default:
          setScreenValue('');
          break;
      };
    } else {
      /* Error Handling */
    };
  };

  return (
    <div className="App">
      <Display screenValue={screenValue} setScreenValue={setScreenValue}/>
      <ButtonContainer setScreenValue={setScreenValue} calculate={calculate}/>
    </div>
  );
}

export default App;
