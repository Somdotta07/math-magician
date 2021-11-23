import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
// import Output from './components/Output';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-body">
        <Calculator />        
      </div>
    );
  }
}

export default App;
