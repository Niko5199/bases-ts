/*
 * void -> vacio no hay nada
 * una funcion que no tenga retorno implicito es decir que no retorne nada
 * entonces va a retornar  un undefined
 *
 * Basicamente void es una manera de decirle a typescript para indicar que
 * no hay un valor de retorno, usualmente en una funcion que regresa void
 * es correcto ponerle el tipo de la funcion
 *
 * Es usado basicamente para especificar que mi funcion no retorna nada
 */

(() => {
  function callBatman(): void {}

  const callSuperman = (): void => {};

  const a = callBatman();

  console.log(a);
})();
