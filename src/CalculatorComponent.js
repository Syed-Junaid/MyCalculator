// src/CalculatorComponent.js
import React, { useState } from 'react';
import './CalculatorComponent.css';

const CalculatorComponent = () => {
  const [display, setDisplay] = useState('');
  const [memory, setMemory] = useState(null);

  const handleButtonClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clearDisplay();
    } else if (value === '%') {
      calculatePercentage();
    } else if (value === 'M+') {
      setMemory(parseFloat(display));
      clearDisplay();
    } else if (value === 'MR') {
      if (memory != null) {
        setDisplay(memory.toString());
      }
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  const calculateResult = () => {
    try {
      const result = new Function(`return ${display}`)();
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };                                                                                                                                                                        
  

  const calculatePercentage = () => {
    try {
      setDisplay((parseFloat(display) / 100).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  return (
    <div className="calculator">
      <div className="display">{display || '0'}</div>
      <div className="buttons">
        {['7', '8', '9', '/'].map((btn) => (
          <button onClick={() => handleButtonClick(btn)} key={btn}>{btn}</button>
        ))}
        {['4', '5', '6', '*'].map((btn) => (
          <button onClick={() => handleButtonClick(btn)} key={btn}>{btn}</button>
        ))}
        {['1', '2', '3', '-'].map((btn) => (
          <button onClick={() => handleButtonClick(btn)} key={btn}>{btn}</button>
        ))}
        {['0', '.', '=', '+'].map((btn) => (
          <button onClick={() => handleButtonClick(btn)} key={btn}>{btn}</button>
        ))}
        <button onClick={() => handleButtonClick('C')}>C</button>
        <button onClick={() => handleButtonClick('%')}>%</button>
        <button onClick={() => handleButtonClick('M+')}>M+</button>
        <button onClick={() => handleButtonClick('MR')}>MR</button>
      </div>
    </div>
  );
};

export default CalculatorComponent;
