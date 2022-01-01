/*
 * Los argumentos por defecto son los que se le pasan al método
 * como ultimo argumento, ahora podemos establecer el valor por
 * defecto y eso nos ayudara a que typescript no nos mande un error
 */

(() => {
  const fullName = (
    firstName: string,
    lastName?: string,
    upper: boolean = false
  ): string => {
    return upper
      ? `${firstName} ${lastName}`.toUpperCase()
      : `${firstName} ${lastName}`;
  };
  const name = fullName('Tony', 'Stark', true);
  console.log(name);
})();
