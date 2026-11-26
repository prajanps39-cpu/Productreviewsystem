import { useState } from "react";
function Login(){
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");


function loginSubmit(e){
    e.preventDefault();
 console.log("Username:",username);
 console.log("Email:",email);
 console.log("Password:",password);
}

return(
    <div >
        <h1>ProductReviews</h1>
        <p>honest review for the products...</p>
        <br></br>

        <form onSubmit={loginSubmit}>
            <label>UserName:</label>
            <input type ="text" required placeholder="Enter your usnername." value={username} onChange={(e)=>setUsername(e.target.value)}/>
             <br></br>
              <br></br>
             <label>Email:</label>
            <input type ="email" required placeholder="Enter your email id." value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <br></br>
             <br></br>
            <label>Passcode:</label>
            <input type ="password" required placeholder="Enter your Password." value={password} onChange={(e)=>setPassword(e.target.value)}/>
               <br></br>
                <br></br>
            <button type = "submit">Login</button>
        </form>
    </div>

);
}
export default Login;