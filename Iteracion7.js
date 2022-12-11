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

  let resultado = indexOfDeRocio(arrayDeValores, valorAComprobar);
  // let resultado = arrayDeValores.indexOf(valorAComprobar);


  if (resultado === -1) {
    resultado = false;
  } else {
    resultado = {
      posicion: resultado,
      encontrado: true
    }
    // resultado = [resultado, true];
  }

  return resultado;
}


/**
 *  funcion que replica el indexOf
 * 
 **/
function indexOfDeRocio (arrayDeValores, valorAComprobar) {
  let posicion = -1;

  for (let i = 0; i < arrayDeValores.length; i++ ){
     if (arrayDeValores[i] === valorAComprobar) {
      posicion = i;
      break;
     }
  }

  return posicion;
}


console.log(finderName(nameFinder,'Jessica'));
