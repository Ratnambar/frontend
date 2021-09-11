import React,{useState} from 'react'



function Register()
 {

    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [is_younger,setIs_younger]=useState(false)
   


    async function signUp()
    {
      let item = {username,email,password,is_younger}
      console.log(item);
      let result = await fetch("http://127.0.0.1:8000/users/",{
          method : "POST",
          body : JSON.stringify(item),
          headers :{
            "Content-Type" : "application/json",
            "Accept" : "application/json"
          }
        })
        result = await result.json()
        // console.log("result ",result)
        localStorage.setItem("user-info",JSON.stringify(result))
        // history.push("/listusers")
    }



  return (
    <div>
      <h1>Signup Page</h1>
      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} 
      name="username" 
      placeholder="username" />
      <br />
      <br />
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}
       name="email" 
      placeholder="email" />
      <br />
      <br />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} 
      name="password"
       placeholder="password" />
      <br />
      <br />
      <input type="checkbox" value={is_younger} onChange={(e)=>setIs_younger(e.target.checked)} name="is_younger" />
      <br />
      <br />
      <button onClick={signUp}>Signup</button>
    </div>
  );
}

export default Register