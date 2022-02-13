/*
 * La diferencia entre private y protected es que el protected podemos
 * acceder a metodos, y propiedades dentro de la clase que extiendan de
 * otra clase, esto no significa que podamos acceder al metodo o propiedad
 * usando una instancia ya que como vemos no funciona, protegida es que solo
 * funcionan por decirlo asi, dentro de la clase o clases que extiendan de la
 * misma
 *
 * En pocas palabras los metodos y propiedades que esten protegidas no se
 * pueden acceder desde fuera de la clase, pero las clases que extiendan de
 * esta, si pueden acceder a los metodos y propiedades. Mas que sus instancias
 * no pueden acceder a los metodos y propiedades protegidas y eso es gracias a
 * la herencia prototipica acuerdate que si no encuentra un metodo o propiedad
 * javascript lo terminara por buscar en su prototipo en este caso el prototipo es
 * la clase que extiende
 *
 * Clase 62 Gets y Sets
 *
 * Un geter y setter visualmente desde afuera, parecieran propiedades comunes y
 * corrientes pero internamente es como un metodo.
 *
 * Para hacer un get vamos a usar la palabra reservada get seguido del nombre
 * que le queramos dar a ese getter, los getter por defecto tienen que retornar
 * un valor. Cabe recalcar que los getter son tratados como propiedades.
 *
 * El set se usa igual que el get, pero recibe un valor y establece algo, si no
 * establecemos un parametro nos mandara un error.
 *
 * Como extra podremos crear codigo antes de retornar o establecer el valor
 * tanto en el get como en el set.
 *
 */

(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log('Constructor Avenger llamado');
    }
    protected getFullname() {
      this.Saludo();
      return `${this.name} ${this.realName}`;
    }
    private Saludo() {
      console.log('Hola');
    }
  }

  class Xmen extends Avenger {
    constructor(
      public name: string,
      public realName: string,
      public isMutant: boolean
    ) {
      super(name, realName);
      // console.log(this.getFullname());
    }

    get fullName() {
      return `${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
      if (name.length < 2) throw new Error('El nombre es muy corto');
      this.name = name;
    }
    public getFullNameDesdeXmen() {
      console.log(this.getFullname());
    }
  }

  // const wolverine = new Xmen('Wolverine', 'Logan', true);
  // console.log(wolverine);
  // wolverine.getFullNameDesdeXmen();

  // * LLamamos el get
  // console.log(wolverine.fullName);

  // * Llamamos el set
  // wolverine.fullName = 'Lobezno';
  // console.log(wolverine.fullName);
})();
