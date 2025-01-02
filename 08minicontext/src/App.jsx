import { useState } from 'react'
import Usercontextprovider from './context/Usercontextprovider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Usercontextprovider>
      <h1>React Js</h1>
      <Login/>
      <Profile/>
    </Usercontextprovider>
  )
}

export default App
