import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <button>AC</button>
        <button>+/-</button>
        <button>%</button>
        <button className="operand-color">÷</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="operand-color">x</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="operand-color">-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button> 
        <button className="operand-color">+</button>
        <button className="span-two">0</button>
        <button>.</button>
        <button className="operand-color">=</button>
      </div>
    );
  }
}
export default Calculator;
