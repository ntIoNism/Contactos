import React from "react";


function Contacto(props) {
    return (
        <div>
            {props.nombre}
            {props.telefono}
            {props.correo}
        </div>
    )
}

export default Contacto;