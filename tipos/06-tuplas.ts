/*
 * La ventaja de trabajar con las tuplas es de que nosotros podemos controlar
 * que valores y que tipo de dato contiene y podemos asignar n numero de tipados
 * controla los valores que vamos a introducir a la tupla
 */

(() => {
  const hero: [string, number, boolean] = ['Dr Strange', 100, true];
  hero[0] = 'Ironman';
  hero[1] = 200;
  hero[2] = false;
  console.log(hero);
})();
