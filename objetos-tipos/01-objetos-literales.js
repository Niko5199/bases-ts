"use strict";
/*
 * Ahora bien para trabajar lo que seria un objeto literal,
 * podemos establecer los metodos y propiedades en el tipado
 * esto es un enorme poder ya que podemos definir el tipado que
 * queremos para cada propiedad o metodo, al definirlos podemos
 * usar el operador opcional para decir que dicha propiedad o metodo
 * es opcional. A diferencia de las funciones en los objetos no
 * importa la posicion de los parametros opcionales, en los objetos literales.
 *
 * Pero usualmente se recomienda que las propiedades o metodos esten
 * ordenados de forma alfabetica para que sea mas facil de leer.
 *
 * Y la forma en como creamos los tipos especificos es de la siguiente
 * forma:
 *
 * type NombreTipo: {parametros con tipado}
 *
 *
 */
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['speed', 'Travel through time'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['speed'],
    };
})();
