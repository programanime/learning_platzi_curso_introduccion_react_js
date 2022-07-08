import './App.css'
import React from "react"
import { AppUI } from "./AppUI"
import { TodoContext } from "./context/TodoContext"
import { useState } from "react";
import { useHttpGet } from "./hooks/useHttpGet"
import { useLocalStorage } from "./hooks/useLocalStorage"

export function App() {
    const {loading,error,data:todos} = useHttpGet("http://localhost:12345/curso_introduccion_react_js/");
    const [searchValue,setSearchValue] = useState("")
    const [,setTodos] = useLocalStorage("todos",[])
    const totalTodos = todos.length
    const [openModal,setOpenModal]=useState(false)
    
    const completedTodos = todos.reduce((total, todo) => {
        if(todo.completed)return total+1;
        return total+0;
    }, 0)
    
    let filteredTodos = todos;
    
    const onComplete = (text) => {
        const index = todos.findIndex((todo) => (todo.text === text))
        todos[index].completed=true
        setTodos([...todos])
    }
    
    const onRemove = (text) => {
        setTodos(todos.filter((todo) => (todo.text !== text)))
    }
                    
    const onCreate = () => {
        setOpenModal((prevState)=>!prevState)
        /*const text = prompt("text")
        todos.push({text:text, completed:false})
        setTodos([...todos])*/
    }
    
    const onSaveTodo = (text) => {
        todos.push({text:text, completed:false})
        setTodos([...todos])
    }
    
    if(searchValue){
        filteredTodos = todos.filter((todo)=>{
            return todo.text.toLowerCase().includes(searchValue.toLowerCase())
        })
    }    
    
    const props = {
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        filteredTodos,
        onCreate,
        onComplete,
        onRemove,
        onSaveTodo,
        loading,
        openModal,
        setOpenModal,
        error
    }
    
    return (
        <TodoContext.Provider value={props}>
            <AppUI />
        </TodoContext.Provider>
    )
}
