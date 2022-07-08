import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({onCreate}) {
    return (
        <button onClick={onCreate} className="CreateTodoButton">+</button>
    );
}

export { CreateTodoButton };