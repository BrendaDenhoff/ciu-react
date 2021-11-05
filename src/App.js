import { useState } from "react";
import Changuito from "./components/Changuito";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Producto from "./components/Producto";

function App() {

  const [productos, guardarProductos] = useState([
    {id:1, articulo: " Planchita de cabello Elegance Digital",precio:8800},
    {id:2, articulo: " Secador de pelo Lumina lon",precio:7300},
    {id:3, articulo: " Cortadora pelo Multi-slyler G625",precio:5030},
    {id:4, articulo: " Cepillo eléctronico Innova Extreme Keration",precio:3840},
    {id:5, articulo: " Rizadora de pelo Tourmaline",precio:3680}
  ]);

  const [changuito, agregarProducto] = useState([])

  return (
    <div>
      <Header />
      <h1>Productos de belleza</h1>
      {productos.map(producto => 
      (
        <Producto 
          key = {producto.id}
          producto = {producto}
          productos ={productos}
          changuito = {changuito}
          agregarProducto={agregarProducto}
        />
      )
      )}
      <Changuito 
      changuito ={changuito}
      agregarProducto={agregarProducto}
      />
      <Footer />
    </div>
  );
}

export default App;
