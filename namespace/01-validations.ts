/*
 * Namespace
 * Los namespaces son una forma de organizar nuestro codigo,
 * para que no haya errores de nombres de variables y funciones
 * que se puedan confundir. En cada namespace podemos tener
 * todo el cuerpo, variables y funciones que queramos. Y para
 * el mundo exterior exponemos lo que deseamos, es como un agrupardor
 * global.
 */

namespace validations {
  export function validateText(text: string): boolean {
    return text.length > 3 ? true : false;
  }

  const validateDate = (date: Date): boolean => {
    return isFinite(date.valueOf()) ? false : true;
  };
}

console.log(validations.validateText('Hello'));
