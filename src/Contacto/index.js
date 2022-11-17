import React from "react";


function Contacto(props) {
    return (
        <div>
            <p>{props.nombre}</p>
            <p>{props.telefono}</p>
            <p>{props.correo}</p>
            <button>Borrar</button>
        </div>
    )
}

export default Contacto;