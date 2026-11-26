import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(){
    //const[username,setUsername]=useState("");
    //const[email,setEmail]=useState("");
    //const[password,setPassword]=useState("");
    
    const navigate = useNavigate()

    const[formdata,setFormdata] = useState({
        username:"",
        email:"",
        password:""

    })

    function handleChange(e){
        e.preventDefault();
        setFormdata({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }




function loginSubmit(e){
    e.preventDefault();
    console.log(formdata)
    navigate('/dashboard',{state:formdata})
}

return(
    <div >
        <h1>ProductReviews</h1>
        <p>honest review for the products...</p>
        <br></br>

        <form onSubmit={loginSubmit}>
            <label>UserName:</label>
            <input type ="text" required placeholder="Enter your usnername." name="username" onChange={handleChange}/>
             <br></br>
              <br></br>
             <label>Email:</label>
            <input type ="email" required placeholder="Enter your email id." name="email" onChange={handleChange}/>
            <br></br>
             <br></br>
            <label>Passcode:</label>
            <input type ="password" required placeholder="Enter your Password." name="password" onChange={handleChange}/>
               <br></br>
                <br></br>
            <button type = "submit">Login</button>
        </form>
    </div>

);
}
export default Login;