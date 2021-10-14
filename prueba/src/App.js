import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {
  // Crear lista de productos
  const [productos, setProductos] = useState([
    { id: 1, nombre: "camisa", precio: 20 },
    { id: 2, nombre: "pantalon", precio: 30 },
    { id: 3, nombre: "remera", precio: 40 },
    { id: 4, nombre: "zapatillas", precio: 50 },
  ]);

  //State Carrito de Compras

  const [carrito, setCarrito] = useState([]);

  //obtener fecha

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Tienda Virtual" />

      <h1>Lista de Productos</h1>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito={carrito}
          productos={productos}
          setCarrito={setCarrito}
        />
      ))}

      <Carrito carrito={carrito} setCarrito={setCarrito} />

      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
