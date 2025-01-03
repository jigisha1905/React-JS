import { useState,useEffect } from 'react'
import { Todoprovider } from './context'
import  TodoForm  from './components/Todoform.jsx'
import TodoItem from './components/Todoitems.jsx'

function App() {
  const [todos,settodos]=useState([])

  //to get access to previous states of todos prev is used
  const addtodo=(todo)=>{
    //if you do this then all the old values will be deleted but we need the states of todos
    settodos((prev)=>[{id:Date.now(),...todo},...prev])
  }
  const updatetodo=(id,todo)=>{
    settodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===id?todo:prevtodo)))
  }
 const deletetodo=(id)=>{
  settodos((prev)=>prev.filter((todo)=>todo.id !== id))
 }
  const togglecomplete=(id)=>{
    //console.log()
    settodos((prev)=>prev.map((prevtodo)=>
      //take all the values then overwrite it
      prevtodo.id===id?{...prevtodo,completed:!prevtodo.completed}:prevtodo))
  }
 //local storage 

//returns the value but gives value in string so change it to json format 
useEffect(()=>{
  const todos=JSON.parse(localStorage.getItem("todos"))

  if(todos && todos.length>0){
    settodos(todos)
  }

},[])

//todos are the keys
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

  return (
    <Todoprovider value={{todos,addtodo,updatetodo,deletetodo,togglecomplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm/> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id}
                          className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App
