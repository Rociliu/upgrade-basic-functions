"use strict";
//Calcular un promedio 

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let suma = 0;
  for (let i=0; i<numbers.length; i++){
    suma = suma + numbers[i];
  }

  let promedio = suma / numbers.length; 
  return promedio;
}
 let result = average(numbers);
 console.log("El promedio es de: " + result); 

