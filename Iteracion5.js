"use strict";
//Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. 

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(arrayValores) {

  let suma = 0;

  for (let valor of arrayValores) {
    if (typeof(valor) === 'number' ) 
    {
      suma = suma + valor;
    } 
    
    if(typeof(valor) === 'string' ) {
      suma = suma + valor.length;
    }
    
  }

  return suma;
}
