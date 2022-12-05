"use strict";
//Completa la función que tomando dos números como argumento devuelva el más alto.
function sum(numberOne , numberTwo) {
    if(numberOne>numberTwo){
        return numberOne;
    }
    else{
        return numberTwo;
    }
  }
  
  console.log(sum(3,5));
  console.log(sum(23,5));

