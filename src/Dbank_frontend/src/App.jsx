import React, { useState } from 'react';

const Calc = () => {
  const [cell, setCell] = useState(0);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleOperation = async (operation, n) => {
    try {
      let result;
      switch (operation) {
        case 'add':
          result = await add(n);
          break;
        case 'sub':
          result = await sub(n);
          break;
        case 'mul':
          result = await mul(n);
          break;
        case 'div':
          result = await div(n);
          if (result === null) throw new Error('Division by zero');
          break;
        default:
          throw new Error('Invalid operation');
      }
      setCell(result);
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };

  const add = async (n) => {
    const newCell = cell + n;
    return newCell;
  };

  const sub = async (n) => {
    const newCell = cell - n;
    return newCell;
  };

  const mul = async (n) => {
    const newCell = cell * n;
    return newCell;
  };

  const div = async (n) => {
    if (n === 0) {
      return null;
    } else {
      const newCell = cell / n;
      return newCell;
    }
  };

  const handleClear = () => {
    setCell(0);
    setInput('');
    setError('');
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <div>
        <button onClick={() => handleOperation('add', parseInt(input))}>Add</button>
        <button onClick={() => handleOperation('sub', parseInt(input))}>Subtract</button>
        <button onClick={() => handleOperation('mul', parseInt(input))}>Multiply</button>
        <button onClick={() => handleOperation('div', parseInt(input))}>Divide</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <div>
        <p>Result: {error ? error : cell}</p>
      </div>
    </div>
  );
};

export default Calc;
