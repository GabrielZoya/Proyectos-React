import React, { useState } from "react";
import Error from "./Error.js";
import shortid from "shortid";

const Formulario = () => {
  const [nombre, guardarNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  //cuando se agrega un gasto
  const agregarGasto = (e) => {
    e.preventDefault();

    //validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);

    //armar gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };
    console.log(gasto);
    //pasar gasto al componente principal

    //resetear form
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>

      {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}

      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => guardarNombre(parseInt(e.target.value))}
        />
      </div>

      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 500"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

export default Formulario;
