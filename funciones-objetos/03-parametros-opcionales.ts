/*
 * Para los parametros opcionales
 * Podemos decirle a typescript que hay parametros opcionales
 * y para hacer eso debemos de hacer uso del encadenamiento opcional
 * y con esto decimos oye typescript el parametro que tenga un
 * encadenamiento opcional es un parametro opcional.
 *
 *  y podemos usar el operador or para decirle a typescript que
 *  que asignamos otro valor si el parametro no tiene ningun valor
 *
 * En javascript todos los parametros son opcionales, por lo que
 * no hay manera de obligar a javascript
 */

(() => {
  const fullName = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName || 'no lastName'}`;
  };
  const name = fullName('Tony');
  console.log({ name });
})();
