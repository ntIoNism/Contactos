import React from "react";
import './Busqueda.css';
function Busqueda(props) {
    // let texto="texto 1";
    let [texto,setTexto]=React.useState('campo');

    function click(){
        console.log("Click");
        setTexto("otro texto")
    };

    function buquedaOn(event){
        setTexto(event.target.value);
    }

    return (
       <React.Fragment>
           <input onChange={buquedaOn}></input>
           {/* <button onClick={click}>click</button> */}
           {/* <p style={
               {
                   color:"red",
                   border: "solid black 2px"
               }
           }>{texto}</p>
           <p className="texto">{texto}</p> */}
       </React.Fragment>
    );
}

export { Busqueda };