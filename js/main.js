
//funcion que pide la cantidad de numeros que desea integrar a la lista 
function almacenarNumeros() {
  const cantidad = Number(document.getElementById("cantidad").value);
  const numeros = [];
  for (let i = 1; i <= cantidad; i++) {
    const numero = Number(prompt(`Ingresa el número ${i}:`));
    numeros.push(numero);
  }
  console.log(`Los números ingresados son: ${numeros}`);
  return numeros;
}


// una ves ya teniendo la lista se pasan a la siguiente funcion, esta ve si los numeros son pares, impares, igual a cero y si es menor a 0 se convierte a numero positivo.

function operacionesConNumeros() {
  const arrayDeNumeros = almacenarNumeros();

  // Recorremos el array de números utilizando un bucle for
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] < 0) {
      const numeroPositivo = -arrayDeNumeros[i];
      console.log(
        `El número ${arrayDeNumeros[i]} convertido a positivo es ${numeroPositivo}`
      );
    }
    else if (arrayDeNumeros[i] === 0) {
      console.log(`El número ${arrayDeNumeros[i]} es igual a cero`);
    }
    else {
      if (arrayDeNumeros[i] % 2 === 0) {
        console.log(`El número ${arrayDeNumeros[i]} es par`);
      }
      else {
        console.log(`El número ${arrayDeNumeros[i]} es impar`);
      }
    }
  }
}


