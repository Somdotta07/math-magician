import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Nav from './Nav';
import Home from './components/Home';
import Quote from './components/Quotes';
import Calculate from './components/CalculatorPg';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/Calculate" component={Calculate} />
          <Route path="/Quote" component={Quote} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
