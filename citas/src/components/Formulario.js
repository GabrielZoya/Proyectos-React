import React, { Fragment, useState } from "react";
import uuid from "uuid/dist/v4.js";

const Formulario = ({ crearCita }) => {
  // State de Citas
  const [cita, setCita] = useState({
    mascota: "",
    dueño: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  // State de validacion de campos
  const [error, setError] = useState(false);

  //Funcion que se ejecuta cuando el usuario escribe en un input
  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // Extraer los valores
  const { mascota, dueño, fecha, hora, sintomas } = cita;

  //Envio de formulario
  const submitCita = (e) => {
    e.preventDefault();

    //Validación de datos
    if (
      mascota.trim() === "" ||
      dueño.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }

    // Eliminar mensaje de error de validación
    setError(false);

    //Asignar un ID
    cita.id = uuid();
    console.log(cita);

    //Crear la cita
    crearCita(cita);

    //Reiniciar el form
    setCita({
      mascota: "",
      dueño: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };
  return (
    <Fragment>
      <h2>Crear cita</h2>

      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={submitCita}>
        <label>Nombre de la Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de la mascota"
          onChange={handleChange}
          value={mascota}
        />

        <label>Nombre del dueño</label>
        <input
          type="text"
          name="dueño"
          className="u-full-width"
          placeholder="Nombre del dueño"
          onChange={handleChange}
          value={dueño}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />

        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={handleChange}
          value={sintomas}
        ></textarea>

        <button
          type="submit"
          className="u-full-width button-primary"
          onChange={handleChange}
        >
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
