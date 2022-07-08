import React from "react";
import { TodoContext } from "../../context/TodoContext";
import { useContext } from "react";
import { useRef } from "react";
import "./TodoForm.css";

export function TodoForm() {
    const refDescription = useRef()
    const {onSaveTodo, setOpenModal} = useContext(TodoContext);
        
    const onCancel = () => {
        setOpenModal(false);
    }
    
    const onAdd = (event) => {
        event.preventDefault()
        onSaveTodo(refDescription.current.value);
    }
    
    return (
        <div className=".TodoForm-container">
            <form className="TodoForm" onSubmit={onAdd}>
                <label>Escribe tu tarea</label>
                <textarea ref={refDescription} placeholder="Todo description" />
                <div className="TodoForm-buttonContainer">
                    <button type="button" onClick={onCancel}>Cancel</button>
                    <button onClick={onAdd}>Add</button>
                </div>
            </form>
        </div>
    );
}
