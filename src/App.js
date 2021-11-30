import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Quote from './Quotes';
import Calculate from './CalculatorPg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App(){
  return (
  <Router>
    <div>
      <Nav/>
      <Switch>
      <Route path="/home" exact component={Home}/>
      <Route path="/Calculate" component={Calculate}/>
      <Route path="/Quote" component={Quote}/>
      </Switch>
    </div>
  </Router>
  );
}

 
export default App;
