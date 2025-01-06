import { createSlice,nanoid } from "@reduxjs/toolkit";
//nanoid generates unique ids

const initialState={
    todos:[{id:1,text:"Hello World"}]
}

export const todoslice=createSlice({
    name:'todo',
    initialState,
    reducers:{  //prperties and functions
        addtodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload 
            }
            state.todos.push(todo)
        },
        removetodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        }
    }
    //the current state is given by state
    //in action some values are given or whatever data is passed
})

export const {addtodo,removetodo}=todoslice.actions
//exporting individually because they will use as components

export default todoslice.reducer