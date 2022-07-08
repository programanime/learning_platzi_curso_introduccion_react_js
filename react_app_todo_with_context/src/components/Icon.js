import React from "react";

export function Icon({name = "check",onClick}) {
    return (
        <span class="icono material-icons md-24" onClick={onClick} >
            <span class="material-icons-outlined">
                {name}
            </span>
        </span>
    );
}