import React, { useState } from "react";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import { PrivateRoute } from "./utils/privateRoute";
import BubblePage from './components/BubblePage'

function App() {
  return (
    <Router>
      <div className="App">
        <Link to='/login'>Log in</Link>
        <Link to='/bubblePage'>Dashboard</Link>
        <Route exact path="/login" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute path={`/bubblePage`}>
           <BubblePage />
        </PrivateRoute>
      </div>
    </Router>
  );
}

export default App;
