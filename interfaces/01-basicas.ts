/*
 * Clase 67 Interfaz basica
 *
 * Una interfaz funciona basicamente para casi lo
 * mismo que un tipo(type) en TypeScript. Tambien
 * como dato adicional una interfaz no tiene una
 * representacion visual en el archivo transpilado
 * a JavaScript.
 *
 * Esta hecha para ayudarnos a restringir como lucen
 * nuestros objetos. Podemos usar los tipos y las
 * interfaces para restringir como se comportan en si
 * queda mucho a la restriccion del usuario de como
 * quiera trabajar, pero la unica diferencia es que
 * los tipos no son extendibles y las interfaces si.
 *
 * Un tipo no puede expandirse es decir, una vez
 * que nosotros definimos el tipo, el tipo se queda
 * asi, no puede expandirse. Pero una interfaz si
 * es decir, una interfaz se puede extender agregar
 * mas cosas, es muy parecido a una clase, pero la
 * interfaz no define el comportamiento como una clase,
 * es decir una clase es robusta, una interfaz seria
 * una persona perezosa que le dice al programador
 * que se asegure de que tenga la estrucra definida
 * con propiedades y metodos, pero no le importa si
 * estan implementados o no, simplemente le dice
 * que se asegure de que los tenga, en cambio una clase
 * si implemnta sus metodos.
 *
 * Lo interesante de una clase es que son muy usadas
 * para definir lo que son, peticiones http, y por otro
 * lado los tipos son mas usados cuando sabemos que
 * no va extender mas el tipado, el tipo es muy usado
 * en patrones redux, para definir que tipo de acciones
 * son permitidas en algun objeto.
 */
(() => {
  interface Hero {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  }

  let flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['speed', 'Travel through time'],
  };
  let superman: Hero = {
    name: 'Clark Kent',
    age: 60,
    powers: ['speed'],
    getName() {
      return this.name;
    },
  };
})();
