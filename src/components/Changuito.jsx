// muestra los elementos que se agregan al changuito en pantalla
import React, { Fragment } from 'react';
import './changuito.css';
import Producto from './Producto';


//la palabra class sola es reservada de react, si quiero usar 'class' de css, debo usar 'className
// abajo del <h3> </h3> se agrega la funcionalidad de mostrar lo que se agrega al chango.
//{changuito} = recibo la lista
const Changuito = ({changuito}) => {
    return (
        <Fragment>
            <div className ="changuito" >
                <h3> Carro De Compras </h3>
                {
                    changuito.map(
                        articulo => (
                            <Producto
                            key = {articulo.id}
                            articulo ={articulo}                            
                            />
                        )
                    )
                }
            </div>
        </Fragment>
      );
}
 
export default Changuito;