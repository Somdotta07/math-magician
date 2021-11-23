import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Output from './components/Output';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: '',
    };
  }

  render() {
    return (
      <div>
        <div className="calculator-body">
        <Output result = { this.state.result }/>
        <Calculator/>
        </div>
      </div>
    );
  }
}

export default App;
