"use strict";
/*
 * Todos los objetos pasan como referencia recuerda que no haces copias
 * unicas de los objetos, y si mutas a estos objetos referenciados, pues
 * mutas a los objetos originales
 *
 * Ahora para no hacer desastres con una variable any que acepte todo tipo
 * de valor como numbers o incluso functions, debemos de especificar el tipo
 * de dato que aceptara la variable en este caso sera Function
 *
 * Ahora podemos ser mas estrictos con el tipado y podemos asignar el o los
 * tipos de parametros que tendra junto a su tipado, asi como el retorno de
 * la funcion
 */
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    let myFunction;
    // let myFunction: (y: number, z: number) => number;
    // let myFunction: (y: string) => string;
    // let myFunction: () => string;
    // myFunction = 10;
    // console.log(myFunction);
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Josue'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
