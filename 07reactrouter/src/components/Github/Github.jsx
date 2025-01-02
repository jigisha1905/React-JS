import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

//more optimize way of loading data
function Github(){
    const data=useLoaderData()
    /*const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/jigisha1905')
        .then(response=> response.json())
        .then(data=>{
            console.log(data)
            setdata(data)
        })
    },[])*/
    return(
        <div className="text-center m-4 bg-gray-600 text-white text-3xl p-4">Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300}/>
        </div>
    )
}
export default Github

export const githubinfoloader= async()=>{
     const response=await fetch('https://api.github.com/users/jigisha1905')
     return response.json()
}