import React, {useEffect ,useState } from "react";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


function Listusers() {
      const [data, setData]=useState([])
      useEffect(()=>{
      fetch("http://127.0.0.1:8000/listusers/").then((result)=>{
        result.json().then((resp)=>{
        
          setData(resp)
        })
      })
    },[])
    
      return (
        <div className="App">
          <h1>Get API call</h1>
          <table border="1px;">
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>User Type</td>
              <td>Age</td>
              <td>Gender</td>
              <td>Contact</td>
              <td>Address</td>
            </tr>
            {
              data.map((item)=>
      
            <tr>
              <td>{item.id}</td>
              <Router>
              <td><Link to={"/listusers/"+item.id}>{item.username}</Link></td>
              </Router>
              <td>{item.email}</td>
              <td>{item.is_younger?'CareTaker':'CareSeeker'}</td>
              
              <td>{item.profile[0].age}</td>
              <td>{item.profile[0].gender}</td>
              <td>{item.profile[0].contact}</td>
              <td>{item.profile[0].address}</td>
            </tr>
              )
            }
          </table>
        </div>
      );
    }
    
    export default Listusers;
    