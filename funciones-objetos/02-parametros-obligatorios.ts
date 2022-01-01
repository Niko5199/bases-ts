/*
 * Ahora el detalle es que con javascript antes debiamos validar que
 * el valor del parametro no fuera undefined, y si fuera undefined
 * arrojar un error ya sea con un throw o con un return.
 * Pero con typescript ya no es necesario validar el valor del parametro
 * ya que nos exige que el parametro sea obligatorio.
 *
 * Ahora hay que ser cuidadosos ya que podemos mandar un undefined sin querer
 * con el tipo de valor any asi que tenemos otro motivo mas para no trabajar con
 * any.
 */

(() => {
  const fullName = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
  };
  const name = fullName('Tony', 'Stark');
  console.log(name);
})();
