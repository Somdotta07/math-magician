import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator =() => {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (value)=> {
   const result = calculate({ total, next, operation }, value);
   setTotal(result.total)
   setNext(result.next)
   setOperation(result.operation);
  };
  
  return (
      <div>
        <div className="result">
          <p>
           { total}
           {operation}
           {next}
          </p>
        </div>
        <div className="buttons">
          <button type="button" id="AC" className="button" onClick={() => handleClick('AC')}>AC</button>
          <button type="button" id="+/-" className="button" onClick={() => handleClick('+/-')}>+/-</button>
          <button type="button" id="%" className="button" onClick={() => handleClick('%')}>%</button>
          <button type="button" id="&divide;" className="operand-color" onClick={() => handleClick('÷')}>÷</button>
          <button type="button" id="7" className="button" onClick={() => handleClick('7')}>7</button>
          <button type="button" id="8" className="button" onClick={() => handleClick('8')}>8</button>
          <button type="button" id="9" className="button" onClick={() => handleClick('9')}>9</button>
          <button type="button" id="&times;" className="operand-color" onClick={() => handleClick('x')}>x</button>
          <button type="button" id="4" className="button" onClick={() => handleClick('4')}>4</button>
          <button type="button" id="5" className="button" onClick={() => handleClick('5')}>5</button>
          <button type="button" id="6" className="button" onClick={() => handleClick('6')}>6</button>
          <button type="button" id="-" className="operand-color" onClick={() => handleClick('-')}>-</button>
          <button type="button" id="1" className="button" onClick={() => handleClick('1')}>1</button>
          <button type="button" id="2" className="button" onClick={() => handleClick('2')}>2</button>
          <button type="button" id="3" className="button" onClick={() => handleClick('3')}>3</button>
          <button type="button" id="+" className="operand-color" onClick={() => handleClick('+')}>+</button>
          <button type="button" id="0" className="span-two" onClick={() => handleClick('0')}>0</button>
          <button type="button" id="." className="button" onClick={() => handleClick('.')}>.</button>
          <button type="button" id="=" className="operand-color" onClick={() => handleClick('=')}>=</button>
        </div>
      </div>
    );
  };

export default Calculator;
