import React from "react"
import "./TodoItem.css";
import { Icon as IconItem } from "../../components/Icon";

export function TodoItem({ onComplete, onRemove, completed, text }) {
    return (
        <li className="TodoItem">
          <span onClick={onComplete} className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>
            <IconItem name="check" />
          </span>
          <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
            {text}
          </p>
          <span onClick={onRemove} className="Icon Icon-delete">
            <IconItem name="cancel" />
          </span>
        </li>
    );
}