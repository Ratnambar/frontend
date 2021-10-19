import React,{useState} from 'react'
import {Redirect,} from 'react-router-dom'




function Login()
{
    let [username, setUsername] = useState("")
    let [email, setEmail] = useState("")
    let [password,setPassword] = useState("")
    let [login,setLogin] = useState(false)
    // let [token, setToken] = useState("")


    async function signIn()
    {
        let item = {username,email,password}
        let result = await fetch("http://127.0.0.1:8000/rest-auth/login/",{
            method : "POST",
            body : JSON.stringify(item),
            headers :{
                "Content-Type" : "application/json",
                "Accept" : "application/json"
              }
        })
        result = await result.json()
        localStorage.setItem("login-info",JSON.stringify({
            login:true,
            token:result
        }))
        setLogin({login:true})
        console.log(result);
    }

    return(
        <div>
            <h1>Login Page</h1>
            {
                    !login?
                        <div>
                            <input type="text" name="username" value={username}
                            onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
                            <br/><br/>
                            <input type="text" name="email" value={email}
                            onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
                            <br/><br/>
                            <input type="password" name="password" value={password}
                            onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                            <br/><br/>
                            <button onClick={signIn}>login</button>
                        <br/><br/>
                        </div>
                    
                    :
                        <div>
                            <Redirect to='/' />
                        </div>

            }
            
        </div>
    )
}

export default Login