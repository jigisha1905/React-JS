import { useState } from 'react'
import Todos from './components/Todos'
import AddTodo from './components/Addtodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Redux Toolkit</h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App