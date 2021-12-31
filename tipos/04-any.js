"use strict";
/*
 * El tipo de dato any es recomendable que se use lo menos posible
 * ya que puede generar errores inesperados. Es mas en el tsconfig.json
 * encontramos que por defecto gracias al modo stricto y a la configuracion
 * de noImplicitAny, todos los tipos de datos van ser explicitos.
 *
 * Pero muchas veces para implementar funcionalidades que sean rapidas
 * puede ser util pero siempre y cuando regresemos al codigo y hagamos la
 * tipacion de cada variable de tipo any ya sea que sea un string o un numero
 * o etc.
 *
 * Si nosotros declaramos una variable con let sin tipado entonces por defecto se
 * establece de tipo any. Ahora bien en typescript si declaramos una variable sin
 * el tipado con const entonces nos arroja un error de que la variable declarada
 * con const   debe de ser inicializada.
 *
 * Podemos usar un casting asi podemos decirle a typescript que la variable
 * que estamos declarando es de tipo any. Pueda tratarla como si tuvira un tipado
 * el casting se usa con la palabra reservada as esto se le llama casteo, basicamente
 * lo trata con el tipado que asignemos pero en realidad no sabemos el tipo de dato
 *
 *Tambien hay otro tipo de casting que es <tipo de dato>
 */
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr. Strange';
    console.log(avenger.charAt(2));
    avenger = 150.230294;
    //   console.log(avenger.toFixed(2));
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
