import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


class ProfileUpdate extends React.Component {

  constructor() {
    super();
    this.state = {
      profile_id:'',
      first_name:'',
      last_name:'',
      age: '',
      gender: '',
      contact: '',
      bio: '',
      address: ''
      // user_id: '',
      // username: '',
      // email: '',
      
      // is_younger: ''
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  changeHandler = (e) => {
    const target = e.target;
    // if (target.name === 'username') {
    //   var uname = target.value;
    //   var targetuname = target.name;

    // } else if (target.name === 'email') {
    //   var uemail = target.value;
    //   var targetemail = target.name;
    if(target.name=== 'first_name'){
       var ufname = target.value;
       var  targetfname = target.name;
    }else if(target.name === 'last_name'){
      var ulname = target.value;
      var targetlname = target.name;
    }else if (target.name === 'age') {
      var uage = target.value;
      var targetage = target.name;
    } else if (target.name === 'gender') {
      var ugender = target.value;
      var targetgender = target.name;
    } else if (target.name === 'contact') {
      var ucontact = target.value;
      var targetcontact = target.name;
    } else if (target.name === 'bio') {
      var ubio = target.value;
      var targetbio = target.name;
    } else if (target.name === 'address') {
      var uaddress = target.value;
      var targetaddress = target.name;
  
    }

    this.setState({
      [targetfname]:[ufname],
      [targetlname]:[ulname],
      [targetage]: [uage],
      [targetgender]: [ugender],
      [targetcontact]: [ucontact],
      [targetbio]: [ubio],
      [targetaddress]: [uaddress]

    });
  };


  submitForm(e) {
    e.preventDefault();
    var id = this.props.match.params.id;
    const datas = {
      first_name:this.state.first_name,
      last_name:this.state.last_name,
      age:this.state.age,
      gender:this.state.gender,
      contact:this.state.contact,
      bio:this.state.bio,
      address:this.state.address,
      }

    // }
    console.log(typeof(JSON.stringify(this.state)));
    fetch(`http://127.0.0.1:8000/updateuser/${id}/`, {
      method: 'PUT',
    
      headers: {
        'Content-Type': 'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify(datas),
    }).then(response => response.json())
      .then((data) => console.log(data))
      .catch(function(error){
        console.log(error);
      })
  }



  fetchUserData() {
    var id = this.props.match.params.id;
    fetch(`http://127.0.0.1:8000/userdetails/${id}/`)
      .then(response => response.json()).then((data) => {
        this.setState({
          profile_id:data.id,
          first_name:data.first_name,
          last_name:data.last_name,
          age: data.age,
          gender: data.gender,
          contact: data.contact,
          bio: data.bio,
          address: data.address,
          // is_younger: data.user.is_younger,
        });
      })
  }

  componentDidMount() {
    this.fetchUserData();
  }

  render() {
    return (
      <div>Update user id:{this.props.match.params.id} <br />
      {/* <h3>User id:{this.state.user.username}</h3> */}
        <form method="post">
          <input type="hidden" name="id" value={this.state.}/>
          <input type="text" name="first_name" value={this.state.first_name} onChange={this.changeHandler} /><br />
          <input type="text" name="last_name" value={this.state.last_name} onChange={this.changeHandler} /><br />
          <input type="text" name="age" value={this.state.age} onChange={this.changeHandler} /><br />
          <input type="text" name="gender" value={this.state.gender} onChange={this.changeHandler} /><br />
          <input type="text" name="contact" value={this.state.contact} onChange={this.changeHandler} /><br />
          <input type="text" name="bio" value={this.state.bio} onChange={this.changeHandler} /><br />
          <input type="text" name="address" value={this.state.address} onChange={this.changeHandler} /><br />
          <button onClick={this.submitForm}>Update</button>
        </form>
      </div>
    )
  }
}



export default ProfileUpdate;