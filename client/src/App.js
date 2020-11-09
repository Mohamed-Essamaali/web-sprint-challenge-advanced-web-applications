import React from "react";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import { PrivateRoute } from "./utils/privateRoute";
import BubblePage from './components/BubblePage'

function App() {
  return (
    <Router>
      <div className="App">
        <div className='links'>

          <Link to='/login'>Log in</Link>
          <Link to='/colors'>Bubbles</Link>
         
        </div>
        <Route exact path="/login" component={Login} />
      
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute path={`/colors`}>
           <BubblePage />
        </PrivateRoute>
      </div>
    </Router>
  );
}

export default App;
