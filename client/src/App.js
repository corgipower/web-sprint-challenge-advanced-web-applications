import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from './components/BubblePage'
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <p><Link to='bubbles'>Bubbles</Link></p>
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute exact path='/bubbles' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
