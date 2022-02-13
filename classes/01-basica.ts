(() => {
  /*
   * En las clases de typescript podemos tener propiedades y métodos
   * como en una clase de javascript. Solo que el plus de esto es que
   * ahora tenemos palabras clave que son public, private y protected
   * que nos permiten definir que propiedades y métodos son públicos
   * y privados respectivamente.
   *
   * Recordemos que la palabra clave static nos permite definir
   * métodos y propiedades estáticas solo para esta clase, es decir
   * solo existe para la clase y no para los objetos que se crean a
   * partir de la instancia
   *
   * Tambien podemos definir las propiedades como opcionales, pero al
   * hacer esto en la clase debemos hacer lo mismo para el constructor
   * ya que debemos decirle a typescript que trabajara con parametros
   * opcionales.
   *
   *
   * Clase 59. Forma corta de asignar propiedades
   *
   * Lo que hacemos es usar la palabra clave que deseamos que sea cada
   * propiedad, en el caso de name sabemos que es private entonces hacemos
   * el siguiente ejemplo
   *
   * constructor(private name: string)
   *
   *
   * Clase 60. Metodos publicos y privados
   *
   * Podemos crear metodos publicos y privados, con las palabras clave
   * public y private respectivamente. Acuerdate que el metodo private esta
   * solo accesible para la clase mas aya no, es por eso que la instancia
   * y hasta el objeto llamado Avenger, no puede acceder al metodo private,
   * y los metodos static bueno simplemente igual que las propiedades existen
   * para la clase y no para los objetos.
   *
   */
  class Avenger {
    // private name: string;
    // public team: string;
    // public realName?: string;
    static avgAge: number = 40;
    static getAvgAge() {
      return this.name;
    }
    constructor(
      private name: string,
      public team: string,
      public realName: string
    ) {}

    private bio(): string {
      return `${this.name} (${this.team})`;
    }
    public filter() {
      return this.bio();
    }
  }

  const atMan = new Avenger('Atman', 'Capitan America', 'Scott Lang');
  //   console.log(atMan);
  //   console.log(Avenger.avgAge);
  //   console.log(atMan.filter());
  //   console.log(Avenger.getAvgAge());
})();
