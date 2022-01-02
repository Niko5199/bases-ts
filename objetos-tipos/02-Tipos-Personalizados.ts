/*
 * Tipos Personalizados
 * En typescript existe una palabra reservada llamada type, esta
 * palabra reservada esta creada para obligar y poner reglas al objeto
 * o variable que vayamos definiendo funciona como si fuera un tipo comun
 * y corriente como un string, number, boolean, etc. Lo interesante de
 * los tipos personalizados si el dia de mañana deseamos cambiar el tipado
 * de una de las propiedad o el valor de retorno de un metodo, entonces
 * en todos los donde tenga las referencias me va a marcar un error typescript
 */

(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

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
