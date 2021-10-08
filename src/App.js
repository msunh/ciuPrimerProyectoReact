import Footer from './components/Footer';
import Header from './components/Header';
import Producto from './components/Producto'
import {useState, Fragment} from 'react';

//componente padre app.js
function App() {
  //recordar que en el return del componente solo puedo poner un header:
  // el Header incluido abajo es es un componente que cree anteriormente

  //uso un state , coloco un listado de productos
  // este es el formato:
  //primero el objeto que voy a tocar [articulos] y despues de la coma la función que se encargará de 
  //modificar ese estado inicial [guardarProductos]

  //useState() es el hook y dentro de los parentesis coloco el estado inicial
  const [articulos, guardarProductos] = useState([
    {id:1, item: "Pico Loro", precio: 1000},
    {id:2, item: "Aerosol Negro", precio: 800},
    {id:3, item: "Destornillador", precio: 500},
    {id:4, item: "Lamparita", precio: 150},
    {id:5, item: "Calefon", precio: 5000}

  ]);

  return (
    <Fragment>
      
      <Header /> 
      <h1>Ferretería Kurko Bain , Herramientas online.</h1>
      
      {articulos.map(articulo => ( <Producto articulo = {articulo}/>))}
      
      <Footer 
      //puedo crear una propiedad y enviarla desde el comp padre hacia el hijo
      // puedo enviar diferentes tipos de props, en este caso un string
      anio={"2021"}/>
      
    </Fragment>
  );
}

export default App;
