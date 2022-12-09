"use strict";
//Calcular un promedio 

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average() {
  let sum = 0;
  for (let i=0; i<numbers.length; i++){
    sum = sum + numbers[i];
  }

  let promedio = sum / numbers.length; 
  return promedio;
}
 let p = average(numbers);

 console.log("El promedio es de: " + p); 

