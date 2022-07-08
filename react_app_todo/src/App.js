import './App.css';
import React from "react";
import { AppUI } from "./AppUI";
import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useHttpGet } from "./hooks/useHttpGet";

export function App(props) {
    const {loading,error,data:todos} = useHttpGet("http://localhost:12345/curso_introduccion_react_js/");
    //const {loading,error,data:todos} = useHttpGet("http://localhost:12345/curso_introduccion_react_js/?random="+Math.random());
    const [searchValue,setSearchValue] = useState("")
    const [,setTodos] = useLocalStorage("todos",[])
    const totalTodos = todos.length
    
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
        const text = prompt("text")
        todos.push({text:text, completed:false})
        setTodos([...todos])
    }
                        
    if(searchValue){
        filteredTodos = todos.filter((todo)=>{
            return todo.text.toLowerCase().includes(searchValue.toLowerCase())
        })
    }
    
    return (
        <AppUI 
            completedTodos={completedTodos}
            totalTodos={totalTodos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            filteredTodos={filteredTodos}
            onCreate={onCreate}
            onComplete={onComplete}
            onRemove={onRemove}
            loading={loading}
            error={error}
        />
    )
}
