import React from 'react';


const Producto = ({articulo}) => {
    return ( 
        <h3>{articulo.id} {articulo.item} {articulo.precio} </h3>
     );
} 
export default Producto;