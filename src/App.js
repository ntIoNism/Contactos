import logo from './logo.svg';
import './App.css';
// import { Busqueda } from './Busqueda';
import a from 'react';
import React from 'react';
import AgregaContacto from './AgregaContacto';
import Contacto from './Contacto';
import ListaContactos from './ListaContactos';
import Busqueda from './Busqueda';

function App(props) {
  let contactos = [
    {
    nombre: "alexis",
    telefono: "322569745",
    correo: "dfbisd@jghfso.com"
  },
  {
    nombre: "Marcelo",
    telefono: "322156564",
    correo: "shbvd@jghfso.com"
  },
  {
    nombre: "fabian",
    telefono: "322615894",
    correo: "khvbdshv@jghfso.com"
  }]

  let [textoBusqueda, setTextoBusqueda] = React.useState('');
  let contactosFiltrados=[];

  if (textoBusqueda.length > 0) {
    let textoBusquedaLowerCase=textoBusqueda.toLowerCase();

    contactosFiltrados=contactos.filter((contacto)=>{
      return contacto.nombre.toLowerCase().includes(textoBusquedaLowerCase);
    })
  }
  else {
    contactosFiltrados=contactos;
  }

  return (
    <React.Fragment>
      <h1>Mis contactos</h1>
      <Busqueda textoBusqueda={textoBusqueda} setTextoBusqueda={setTextoBusqueda} />
      <ListaContactos>
        {
          contactosFiltrados.map((contacto) => {
            return (
              <Contacto
                nombre={contacto.nombre}
                telefono={contacto.telefono}
                correo={contacto.correo}
              />
            )
          })
        }

      </ListaContactos>
      <AgregaContacto />
    </React.Fragment>
  );
}

export default App;
