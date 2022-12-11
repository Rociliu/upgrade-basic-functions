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

  for(let i=0; i<arrayDeValores.length; i++){
    if (arrayDeValores.includes(valorAComprobar)){
      return console.log (true, arrayDeValores.indexOf(valorAComprobar));
    }else{
      return console.log(false);
    }
  }

} 
finderName (nameFinder, "Peter");


