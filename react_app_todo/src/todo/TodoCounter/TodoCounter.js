import React from "react";
import "./TodoCounter.css";

let styles = {
    backgroundColor:"red"
}

export function TodoCounter(props) {
    const {completedTodos, totalTodos} = props;
    return (
        <h2  className="TodoCounter" style={styles}>has completado {completedTodos} de {totalTodos} TODOS</h2>
    );
}
