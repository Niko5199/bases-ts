/*
 * Parametros rest se usan ahora no solo agregando los ... puntos
 * sino que tambien hay que agrgar que el tipado de los parametros
 * se ha un arreglo de tipados, eso es que si nuestro parametro
 * rest recive solamente strings o numeros, o cualquier otro tipado
 * que hayamos asignado a la variable rest
 */

(() => {
  const fullName = (firstName: string, ...lastName: string[]): string => {
    console.log(lastName);
    return `${firstName} ${lastName.join(' ')}`;
  };
  const superman = fullName('Clark', 'Joshep', 'Kent');
  console.log(superman);
})();
