import React from "react";

const DirectorioContext = React.createContext();
function DirectorioProvider(props) {

    let contactos,ContadorContactos;

    if (!localStorage.contactos) {
        localStorage.setItem("contactos", JSON.stringify([]));
        contactos = [];
    }
    else {
        contactos = JSON.parse(localStorage.contactos);
    }

    let [textoBusqueda, setTextoBusqueda] = React.useState('');
    let [contactosState, setContactosState] = React.useState(contactos);
    let [Modal,setModal]=React.useState(false);
    let contactosFiltrados = [];


    function borrarContacto(name) {
        let indice = contactosState.findIndex((contactos) => {
            return contactos.nombre == name;
        });
        let contactosTemporal = [...contactosState];
        contactosTemporal.splice(indice, 1);
        localStorage.setItem("contactos", JSON.stringify(contactosTemporal));
        setContactosState(contactosTemporal);
        console.log(contactosTemporal);
    }

    function guardaContacto(contacto){
        let contactosTemporal = [...contactosState];
        contactosTemporal.push(contacto);
        localStorage.setItem("contactos", JSON.stringify(contactosTemporal));
        setContactosState(contactosTemporal);
    }

    if (textoBusqueda.length > 0) {
        let textoBusquedaLowerCase = textoBusqueda.toLowerCase();

        contactosFiltrados = contactosState.filter((contacto) => {
            return contacto.nombre.toLowerCase().includes(textoBusquedaLowerCase);
        })
    }
    else {
        contactosFiltrados = contactosState;
    }
    ContadorContactos=contactosFiltrados.length;


    return (
        <DirectorioContext.Provider value={{
            textoBusqueda,
            setTextoBusqueda,
            contactosFiltrados,
            contactosState,
            setContactosState,
            borrarContacto,
            ContadorContactos,
            Modal,
            setModal,
            guardaContacto
        }}>
            {props.children}
        </DirectorioContext.Provider>
    )
}

export { DirectorioContext, DirectorioProvider }