"use strict";
/**
 * Crea una función que reciba por parámetro:
 *  un array
 *  y el valor que desea comprobar que existe dentro de dicho array.
 * Comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false . 
 */

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function finderName(arrayDeValores, valorAComprobar) {

  let resultado = arrayDeValores.indexOf(valorAComprobar);//compruebo si el nombre está dentro del array, si está me da la posición si no, dará -1
  if (resultado === -1) {
    resultado = false;
  } else { //si no está, el resultado lo meto en un array para poder tener los dos valores
      resultado = [resultado, true]
  }
  return resultado;
}
console.log(finderName (nameFinder, "Bruce"));


