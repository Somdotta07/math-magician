import React,{Component} from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Output from './components/Output';

class App extends Component{
  constructor(){
    super();

    this.state = {
        result: ""
    }
}
render(){
  return(
    <div>
        <div className="calculator-body">
            <Output result={this.state.result}/>
            <Calculator />
        </div>
    </div>
  );
}
}

export default App;
