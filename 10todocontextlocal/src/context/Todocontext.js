import { createContext,useContext } from "react";

export const Todocontext=createContext({
    //defining all the methods and values
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed:false
        }
    ],
    addtodo:(todo)=>{},
    updatetodo:(id,todo)=>{},
    deltetodo:(id)=>{},
    togglecomplete:(id)=>{}
})

export const useTodo=()=>{
    return useContext(Todocontext)
}

export const Todoprovider= Todocontext.Provider