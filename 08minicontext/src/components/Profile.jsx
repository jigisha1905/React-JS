import React,{useContext} from "react";
import Usercontext from "../context/Usercontext";

//method of taking the data
function Profile(){
    const {user}=useContext(Usercontext)
    if (!user) return <div>Please Login</div>
    return <div>Welcome {user.username}</div>
}

export default Profile
