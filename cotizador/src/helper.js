export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

//calcular el total a pagar segun la marca
export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;
    case "europeo":
      incremento = 1.15;
      break;
    case "asiatico":
      incremento = 1.05;
      break;
  }

  return incremento;
}
