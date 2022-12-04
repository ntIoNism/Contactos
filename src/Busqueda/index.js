import React from "react";
import './Busqueda.css';
import { DirectorioContext } from "../Context/DirectorioProvider";
function Busqueda() {

    const {textoBusqueda,setTextoBusqueda}=React.useContext(DirectorioContext);

    function onBusquedaChange(event) {
        setTextoBusqueda(event.target.value);
    }
    return (
        <React.Fragment>
            <div className="texto">
              <input className="imput" onChange={onBusquedaChange} value={textoBusqueda}></input>  
            </div>
        </React.Fragment>
    );
}

export default Busqueda;