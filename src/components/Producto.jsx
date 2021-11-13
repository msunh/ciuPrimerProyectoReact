import React, { Fragment } from 'react';

//se agrega una declaracion para no tener que escribir "articulo.etc" (atributos) cada vez que necesitamos 



const Producto = ({articulo, articulos, changuito, agregarProducto}) => {

    //se agrega una declaracion para no tener que escribir "articulo.etc" (atributos) cada vez que necesitamos
    const {id, item, precio} = articulo;

    //funcion para agregar productos al changuito
    const seleccionarProducto = (id) => {
        const seleccionado = articulos.filter(
            producto => producto.id === id
        )[0];  //me quedo solo con el que selecciono de la lista, o sea el primer elemento

        agregarProducto([...changuito, seleccionado]);    
        //console.log(seleccionado)
        console.log(changuito)
    }

    // con la sintaxis  onClick={ () => ... estamos diciendo que solo se ejecuta la funcion cuando hagamos
    //clic sobre el boton
    return ( 
        <Fragment>
            <div>
            <h3>{id} {item} {precio} </h3>
            
            <button type="button" onClick={ () => seleccionarProducto(id)}> 
            
            Comprar </button>
                        
            </div>

        </Fragment>
     );
} 
export default Producto;