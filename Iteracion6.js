"use strict";
//Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados.
// En caso que existan los elimina para retornar un array sin los elementos duplicados.

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  function removeDuplicates(arrayDeValores) {
    let arraySinDuplicados  = [];
    for (let valor of arrayDeValores) {
      if( arraySinDuplicados.indexOf(valor) === -1 ) { //si indexOf ==-1 indica que el valor no está en arraySinDuplicados y me lo guardo
            arraySinDuplicados.push(valor);
      } 
    }
    return arraySinDuplicados;
  }
console.log(removeDuplicates(duplicates));


