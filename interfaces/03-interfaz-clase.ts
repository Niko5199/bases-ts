/*
 *  Como le decimos a una clase que implemente una interfaz,
 *  si usamos extends es para que extienda una clase no podemos
 *  extender de interfaces. Como no podemos extender podemos
 *  decirle que implemente con la palabra implements. Despues de
 *  usar esta palabra nos debe marcar ciertos errores o falta de
 *  propiedades y metodos que definimos en nuestra interfaz
 *
 *  Recordemos que la palabra clave implements se utiliza para
 *  forzarla a que la clase tenga que implementar una interfaz
 *
 *  Tambien podemos agregar otra interfaz a la clase, y eso es
 *  con la separacion de una coma. Y luego la interfaz que
 *  queremos implementar.
 *
 *  Ejemplo:
 *
 *  class Client implements Address, Client
 *
 *  o simplemente podemos usar la palabra clave extends para
 *  extender la interfaz. y luego la interfaz que queremos
 *  implementar.
 *
 *
 *  Lo que hacemos es externer las reglas de la interfaz a otra
 *  interfaz.
 */

(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number): string;
  }

  interface Human extends Xmen {
    age: number;
  }

  class Mutant implements Human {
    constructor(
      public age: number,
      public name: string,
      public realName: string
    ) {}

    mutantPower(id: number): string {
      return this.name;
    }
  }
})();
