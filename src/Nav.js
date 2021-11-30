import React from "react";
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <nav>
           <ul className= "nav-link">
              <Link to="/home">
                <li>Home</li>
              </Link>
              <div className="line"></div>
              <Link to="/calculate">
                <li>Calculator</li>
              </Link>
              <div className="line"></div>
              <Link to="/quote">
                 <li>Quotes</li>
              </Link>
            </ul>
        </nav>
    )
}

export default Nav;