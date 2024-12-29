import { useState } from 'react'//hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
 const [counter,setcounter]=useState(15)

  //let counter=15

  const addValue=() => {
    console.log("value added",counter)
    if (counter<20) {
      setcounter(counter+1)
    }
    else{
      console.log("value can't be updated more")
    }
   //counter=counter+1
   
  }
  const removeValue=()=>{
    if (counter>0) {
      setcounter(counter-1)
    }
    else{
      console.log("value can't be removed now")
    }
  }

  return (
    <>
     <h1>Counter Project</h1>
     <h2>Counter value:{counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br />
     <button onClick={removeValue}>Remove value</button>
   </>
  )
}

export default App
