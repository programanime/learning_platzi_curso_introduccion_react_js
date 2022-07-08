import React from "react";
import "./TodoCounter.css";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext"

let styles = {
    backgroundColor:"red"
}

export function TodoCounter() {
    const {completedTodos,totalTodos} = useContext(TodoContext);    
    return (
        <h2  className="TodoCounter" style={styles}>has completado {completedTodos} de {totalTodos} TODOS</h2>
    );
}
