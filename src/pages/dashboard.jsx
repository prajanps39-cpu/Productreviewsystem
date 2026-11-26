import { useLocation } from "react-router-dom";
import { useState } from "react";
function Dashboard(){
    const location = useLocation();
    const[userdata,setUserdata] = useState("")
    function displaydata(){
        setUserdata(location.state);
        console.log(userdata)
    }
    return(
        <div>
            <h1>This content is from dashoard</h1>
            <button onClick={displaydata}>getinfo</button>
        </div>
    )
}
export default Dashboard