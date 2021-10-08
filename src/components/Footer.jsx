import React from 'react';

// atajo : escribir "sfc" y enter y crea la función 
const Footer = ({anio}) => { //entre llaves coloco la prop que viene del padre, si coloco mas de una, le pongo comas entre ellas
    
    //Acá se coloca el código javascript que quiero agregar.
    

    //hasta acá, siempre entre la def de la funcion y el return
    return ( 
        //uso unas llaves para colocarlo dentro del componente y dentro coloco la variable
        <h2> Año {anio}</h2>
     );
}
 
export default Footer;