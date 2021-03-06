import React,{useState} from 'react';
import Error from './Error';
import shortid from "shortid";

const Formulario = ({agregarNuevoGasto}) => {

    const [nombre, guardarNombre] = useState("");
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

// Agregar gasto

const agregarGasto = e => {
    e.preventDefault();

    //validar
    if (cantidad<1 || isNaN(cantidad) || nombre.trim() === "") {
        guardarError(true);
        return;
    }
    guardarError(false);

    // construir el gasto
    const gasto = {
        nombre,
        cantidad,
        id: shortid.generate()
    }
    console.log(gasto);


    // pasar gasto a componente principal
    agregarNuevoGasto(gasto);

    // resetear el formulario
    guardarNombre("");
    guardarCantidad("");
}

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos</h2>

            { error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto
            Incorrecto" /> : null }

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ejemplo: Comida"
                    value={nombre}
                    onChange={ e=> guardarNombre(e.target.value)}
                />    
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ejemplo: 500"
                    value={cantidad}
                    onChange={e=> guardarCantidad(parseInt(e.target.value))}
                />    
            </div>

            
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />    
            
        </form>
     );
}
 
export default Formulario;