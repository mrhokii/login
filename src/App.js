import Greeting from "./components/Greeting"
import { useState } from "react";


const App = () => {
    const [LogIn, setLogIn] = useState(false)


    
    const handleLogIn = () =>{
        
            setLogIn(true)
            document.getElementById("user").style.display = "none"
            document.getElementById("pass").style.display = "none"
            document.getElementById("title").innerHTML = "Logout"
        
        
    }
    const handleLogOut = () =>{
        
            document.getElementById("user").style.display = "block"
            document.getElementById("pass").style.display = "block"
            document.getElementById("user").value = ""
            document.getElementById("pass").value = ""
            document.getElementById("title").innerHTML = "Login"
            setLogIn(false)
        
    }

    let button;
    if(LogIn){
        button= <button onClick={handleLogOut}>LogOut</button>
    }else{
        button= <button onClick={handleLogIn}>LogIn</button>
    }
    return (
        <div className="cc">
            <Greeting LogIn={LogIn} />
            <div className="form-box">
                <div className="title">
                    <h2 id="title">Login</h2>
                </div>
                <div className="form">
                    <input type="text" placeholder="username" id="user"></input>
                    <input type="text" placeholder="password" id="pass"></input>
                </div>
                <div className="btn">
                    {button}
                </div>
            </div>
        </div>
    )






}
export default App;