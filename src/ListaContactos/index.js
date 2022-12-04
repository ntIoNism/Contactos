import React from "react";
import './ListaContactos.css'

function ListaContactos(props) {
    return (
        <div className="contactoslis">
            {props.children}
        </div>
    )
}

export default ListaContactos;