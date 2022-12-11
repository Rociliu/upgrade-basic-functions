"use strict";
//Completa la función que tomando un array de strings como argumento devuelva el más largo.
// En caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(arrayDeStrings) {

    let longest = '';
    for (let i = 0; i < arrayDeStrings.length; i++) {   
           
        if (arrayDeStrings[i].length > longest.length) {
            longest = arrayDeStrings[i]; 
        }
    }
    return longest;
}   







