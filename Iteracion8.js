"use strict";
//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. 

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  function repeatCounter(arrayDeValores) { 
    let repeatWords=[];//creo un array para meter las veces que se repite cada valor del array que me pasen.
    for (let i=0; i<arrayDeValores.length; i++){//miro la primera vuelta dando valor de cero
      let vuelta = 0;
      for (let j=0; j<arrayDeValores.length;j++){//si a la segunda vuelta me encuentro el mismo valor, lo sumo al array
            if (arrayDeValores[i]===arrayDeValores[j]){
              vuelta++;
            }
      }
      repeatWords.push(vuelta);
    }
    return repeatWords;
  }
  console.log(repeatCounter(counterWords));






