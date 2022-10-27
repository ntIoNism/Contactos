import logo from './logo.svg';
import './App.css';

function App(props) {
  let mivariable=parseInt(props.edad)
  let mensaje="";
  if(mivariable>20){
    mensaje="es mayor de edad"
  }
  else{
    mensaje="es menor de edad"
  }
  if(mivariable<20){
    mivariable=0
  }
  return (
    <di>
      <h1>hola {props.nombre} tu edad es {mivariable} años {mensaje}</h1>
      <h2>{props.children}</h2>
      <div>solo funciona una etiqueta</div>
    </di>
  );
}

export default App;
