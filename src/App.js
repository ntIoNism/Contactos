import logo from './logo.svg';
import './App.css';
// import { Busqueda } from './Busqueda';
import a from 'react';
import React from 'react';
import AgregaContacto from './AgregaContacto';
import Contacto from './Contacto';
import ListaContactos from './ListaContactos';
import Busqueda from './Busqueda';
import { DirectorioContext, DirectorioProvider } from './Context/DirectorioProvider';

function App(props) {
  return (
    <DirectorioProvider>
      <DirectorioContext.Consumer>
        {
          ({
            contactosFiltrados,
            borrarContacto,
            ContadorContactos,
            Modal,
            setModal
            
          }) => (
            <React.Fragment>
              <h1 className='titulo'>Mis contactos({ContadorContactos})</h1>
              <Busqueda/>
              <ListaContactos>
                {
                  contactosFiltrados.map((contacto) => {
                    return (
                      <Contacto
                        nombre={contacto.nombre}
                        telefono={contacto.telefono}
                        correo={contacto.correo}
                        borrarContacto={() => { borrarContacto(contacto.nombre) }}
                      />
                    )
                  })
                }
              </ListaContactos>
              <button className='SetAgregar' onClick={()=>{setModal(true)}}>Agregar</button>
              {Modal && <AgregaContacto />}
            </React.Fragment>
          )
        }
      </DirectorioContext.Consumer>
    </DirectorioProvider>
  );
}

export default App;


  // let contactos = [
  //   {
  //     nombre: "alexis",
  //     telefono: "322569745",
  //     correo: "dfbisd@jghfso.com"
  //   },
  //   {
  //     nombre: "Marcelo",
  //     telefono: "322156564",
  //     correo: "shbvd@jghfso.com"
  //   },
  //   {
  //     nombre: "fabian",
  //     telefono: "322615894",
  //     correo: "khvbdshv@jghfso.com"
  //   }]
  // let contactos;
  // if (!localStorage.contactos) {
  //   localStorage.setItem("contactos", JSON.stringify([]));
  //   contactos = [];
  // }
  // else {
  //   contactos = JSON.parse(localStorage.contactos);
  // }

  // let [textoBusqueda, setTextoBusqueda] = React.useState('');
  // let [contactosState, setContactosState] = React.useState(contactos);
  // let contactosFiltrados = [];


  // function borrarContacto(name) {
  //   let indice = contactosState.findIndex((contactos) => {
  //     return contactos.nombre == name;
  //   });
  //   let contactosTemporal = [...contactosState];
  //   contactosTemporal.splice(indice, 1);
  //   localStorage.setItem("contactos", JSON.stringify(contactosTemporal));
  //   setContactosState(contactosTemporal);
  //   console.log(contactosTemporal);
  // }


  // if (textoBusqueda.length > 0) {
  //   let textoBusquedaLowerCase = textoBusqueda.toLowerCase();

  //   contactosFiltrados = contactosState.filter((contacto) => {
  //     return contacto.nombre.toLowerCase().includes(textoBusquedaLowerCase);
  //   })
  // }
  // else {
  //   contactosFiltrados = contactosState;
  // }
