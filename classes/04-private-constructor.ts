/*
 * Pero en teoria ustedes pueden utilizar el constructor privado
 * para controlar la manera en la cual nuestras instancias son
 * ejecutadas. El caso principal al que podemos usarlo es para
 * manejar el singleton, es decir una unica instancia a traves
 * de toda mi aplicacion. Es decir, si nosotros necesitamos
 * acceso a la instancia previamente creada simplemente podemos
 * llamar esta instancia que fue creada mediante un constructor
 * privado.
 *
 * Al ponerle la palabra private al constructor, solo sera llamado
 * dentro de la misma clase, usualmente usamos una propiedad con
 * la palabra clave static para poder acceder a la instancia
 */
(() => {
  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {}
    static callApocalipsis(): Apocalipsis {
      if (!this.instance) this.instance = new Apocalipsis('Apocalipsis');
      return this.instance;
    }
    changeName(newName: string): void {
      this.name = newName;
    }
  }

  const apocalipsis = Apocalipsis.callApocalipsis();
  apocalipsis.changeName('Apocalipsis 2');

  // console.log(apocalipsis);

  // ! No se puede acceder a un constructor privado
  //   const apocalipsis = new Apocalipsis('Apocalipsis1');
  //   const apocalipsis2 = new Apocalipsis('Apocalipsis2');
  //   const apocalipsis3 = new Apocalipsis('Apocalipsis3');

  //   console.log(apocalipsis);
})();
