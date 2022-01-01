(() => {
  /*
   * Siempre hay que tener la costumbre de colocar el tipo de dato
   * que retorna la función. Esto para evitar errores a futuro,
   * no debemos dejar esa responsabilidad a typescript ya que
   * el dia de mañana podemos reutulizar una funcion y typescript
   * nos ayuda a usar de la manera en como nosotros esperamos.
   *
   */

  const hero: string = 'Flash';
  function returnName(): string {
    return hero;
  }
  const activateBatisignal = () => {
    return 'Batiseñal activada';
  };

  console.log(typeof activateBatisignal);

  const heroName = returnName();
})();
