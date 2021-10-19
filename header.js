import React from "react";
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';
import { useHistory} from "react-router-dom";

import Listusers from "./Listusers";
import Login from "./Login";
import Form from "./Register";
import ProfileUpdate from "./ProfileUpdate";
// import Logout from "./Logout";




function Header() {

  

    return (
      <div className="App">
        <Router>
          <Link to="/">Listusers</Link>
          <Link to="/signup">Form</Link>
          <Link to="/login">Login</Link>
       
          
        
            <Route exact path="/" component={Listusers}></Route>
            <Route path="/signup" component={Form}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/listusers/:id" component={ProfileUpdate}></Route>
            
        </Router>
      </div>
    );
  }
  
  export default Header;