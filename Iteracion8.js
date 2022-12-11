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
    let objetoAuxiliar = {};

      for (let valor of arrayDeValores) {

        // comprobamos que si objetoAuxiliar tiene una propiedad llamada valor 
        //       (valor cada vez valdrá una de las palabras del array pasado por parámetro)
        if (!objetoAuxiliar.hasOwnProperty(valor)){
          //entonces le creas una propiedad al objeto que se llame como la variable valor 
          //  y le asigno un uno (porque es la primera que vemos esa palabra)
          objetoAuxiliar[valor] = 1;
        } else {
          // incremento el número que habia guardado en esa propiedad
          objetoAuxiliar[valor]++;
        }

      } 
      return objetoAuxiliar;   
  }

  console.log(repeatCounter(counterWords));




