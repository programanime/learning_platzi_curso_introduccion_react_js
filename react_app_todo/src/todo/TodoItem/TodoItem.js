import React from "react"
import "./TodoItem.css";

export function TodoItem({ onComplete, onRemove, completed, text }) {
    return (
        <li className="TodoItem">
          <span onClick={onComplete} className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>
            √
          </span>
          <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
            {text}
          </p>
          <span onClick={onRemove} className="Icon Icon-delete">
            X
          </span>
        </li>
    );
}