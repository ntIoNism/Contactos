import React from "react";
import './Contactos.css';
function Contacto(props) {
    function borrar() {
        props.borrarContacto();
    }

    return (
        <div className="contactos">
            <p className="space">{props.nombre}</p>
            <p className="space">{props.telefono}</p>
            <p className="space">{props.correo}</p>
            <button className="space borrar" onClick={borrar}>Borrar</button>
        </div>
    )
}

export default Contacto;