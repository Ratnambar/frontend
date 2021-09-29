import React, {useEffect ,useState } from "react";
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import Listusers from "./Listusers";
import Login from "./Login";
import Form from "./Register";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import ProfileUpdate from "./ProfileUpdate";
// import Logout from "./Logout";




function Header() {

    // let user = JSON.parse(localStorage.getItem('login-info'));

    return (
      <div className="App">
        <Router>
          <Link to="">Listusers</Link>
          <Link to="/signup">Form</Link>
          <Link to="/login">Login</Link>
          <Link to="/about">AboutUs</Link>
          <Link to="/contact">ContactUs</Link>
          {/* {
            localStorage.getItem('login-info')?
                <Link to="/logout">Logout</Link>
            :null
          } */}
          
          
          
          <Route exact path="/" component={Listusers}></Route>
          <Route path="/signup" component={Form}></Route>
          <Route path="/login" component={Login}></Route>
          <Route exact path="/about">{AboutUs}</Route>
          <Route exact path="/contact">{ContactUs}</Route>
          <Route exact path="/:id">
            <ProfileUpdate />
          </Route>
          {/* <Route path="/logout">{Logout}</Route> */}

        </Router>
      </div>
    );
  }
  
  export default Header;