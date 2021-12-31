"use strict";
(() => {
    /*
     * la propiedad strictNullChecks es una propiedad que se puede usar en un archivo de configuración
     * para indicar que las variables no pueden ser nulas. De preferencia esta propiedad siempre
     * hay que tenerla en true
     *
     * En teoria hay 4 valores permitidos para un booleano:
     * true
     * false
     * null
     * undefined
     *
     * Pero gracias a la restriccion de la propiedad strictNullChecks, el valor null y el valor undefined
     * no son permitidos, mas bien no son asignables a una variable con tipado boolean.
     *
     * Recordemos que null no es lo mismo que undefined, y undefined no es lo mismo que null.
     *
     */
    // let nada: boolean = undefined;
    // console.log(nada);
    // let vacio: null = undefined;
    // let unde: any = undefined;
    // let nulo: any = null;
    // console.log(vacio);
})();
