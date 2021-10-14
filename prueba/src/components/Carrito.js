import React from "react";
import "./carrito.css";
import Producto from "./Producto";

const Carrito = ({ carrito, setCarrito }) => (
  <div className="carrito">
    <h2>Carrito de compras</h2>
    {carrito.map((producto) => (
      <Producto
        key={producto.id}
        producto={producto}
        carrito={carrito}
        setCarrito={setCarrito}
      />
    ))}
  </div>
);

export default Carrito;
