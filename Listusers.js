import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route,Switch } from 'react-router-dom';



function Listusers() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http:key//127.0.0.1:8000/usersprofiles/").then((result) => {
      result.json().then((resp) => {
     
        setData(resp)
      })
    })
  }, [])
  // console.log(data);
  

  return (
    <div className="App">
      <h1>Get API call</h1>
      <table border="1px;">
        <tr>
          <td>Id</td>
          <td>First Name</td>
          <td>Last Name</td>
          {/* <td>User Type</td> */}
          <td>Age</td>
          <td>Gender</td>
          <td>Contact</td>
          <td>Address</td>
        </tr>
        {
          data.map((item) =>

            <tr>
              <td>{item.id}</td>
            
                <td><Link to={'/listusers/'+item.id} >{item.first_name}</Link></td>
             
              <td>{item.last_name}</td>
              {/* <td>{item.user.is_younger ? 'CareTaker' : 'CareSeeker'}</td> */}

              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.contact}</td>
              <td>{item.address}</td>
            </tr>
          )
        }
      </table>
    </div>
  );
}

export default Listusers;
