import React from "react";
import ReactDOM from "react-dom";

export function Modal({ children }){
    return ReactDOM.createPortal(
        <>{children}</>,
        document.getElementById('modal')
    );
}