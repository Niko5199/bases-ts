(() => {
  /*
   * El tipo de dato never es un tipo de dato never es never no hay que
   * confundir que es null o undefined.
   *
   * En pocas palabras el never significa que mi funcion no debe determinar
   * existosamente, basicamente cuando veamos que el tipo de retorno sea
   * never, significa que la funcion terminara con nuestro codigo.
   *
   * Ahora en dado caso que deseemos retornar un numero en nuestra funcion
   * en caso de que no se cumpla este error simplemente asignemos otro valor
   * de retorno y simplemente agregamos el valor de retorno que puede
   * retornar nuestra funcion.
   *
   */

  const error = (message: string): never => {
    throw new Error(`Error: ${message}`);
  };

  const error2 = (message: string): never | number => {
    if (false) throw new Error(`Error: ${message}`);
    return 1;
  };
  error('Ocurrio un error');
})();
