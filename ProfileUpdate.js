import React,{useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom';
 


function ProfileUpdate()
 {
    const { id } = useParams();
    console.log(id);
    
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [bio, setBio]=useState("")
    const [is_younger,setIs_younger]=useState(false)
    const [age, setAge] = useState("")
    const [gender, setGender]=useState("")
    const [contact, setContact]=useState("")
    const [address, setAddress]=useState("")
    
  
  

    const [data, setData] = useState([]);
    useEffect(() => {
      fetch(`http://127.0.0.1:8000/checkdetails/4/`).then((result) => {
        result.json().then((resp) => {
          setData(resp);
          

        });
      });
    },);
    // console.log(data.user.username);
    let val = data?.user;
    console.log(val);
    // const Update =()=>{
    //   fetch(`http://127.0.0.1:8000/checkdetails/4/`).then((result)=>{
    //     result.json().then((resp)=>{
    //       // setData(resp);
    //       console.log(resp);
    //     })
    //   })
    // }
    
    // const user = data.user;
    // console.log(user);


    // async function UpdateUser()
    // {
    //     let item = {username,email,bio,is_younger,age,gender,contact,address}
    //     let result = await fetch(`http://127.0.0.1:8000/checkdetails/${id}/`,{
    //         method : "POST",
    //         body : JSON.stringify(item),
    //         headers :{
    //             "Content-Type" : "application/json",
    //             "Accept" : "application/json"
    //           }
    //     })
    //     // result = await result.json()
        
    //     // console.log(result);
        
    // }

    

  return (
    <div>
    
       <h1>Update :{data.id}</h1>
      
      <input type="text" name="username" value={val.username} onChange={(e)=>setUsername(e.target.value)}/>
      <br />
      <br />
      
      <input type="email" value={val.email} name="email" onChange={(e)=>setEmail}/>
      <br />
       <input type="text" value={val.bio} name="bio" onChange={(e)=>setBio(e.target.value)}/>
      <br />
      <br />
      <br />
    
      <input type="checkbox" value={val.is_younger} name="is_younger" onChange={(e)=>setIs_younger(e.target.value)} />
      <br />
      <br />
      <br />
      
      <input type="text" value={data.age} onChange={(e)=>setAge(e.target.value)}
       name="age" 
      />
      <br />
      <br /><br />
      {/*
      <input type="text" value={val.gender} onChange={(e)=>setGender(e.target.value)}
       name="gender" />
      <br />
      <br />
      <input type="text" value={val.contact} onChange={(e)=>setContact(e.target.value)} 
      name="contact"
      />
      <br />
      <br />
      <input type="address" value={val.address} onChange={(e)=>setAddress(e.target.checked)} name="address" />
      <br />
      <br /> */}
      <button>change</button>  

    </div>
  );
}

export default ProfileUpdate