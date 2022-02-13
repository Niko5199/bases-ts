/*
* Usualmente el proposito de las clases abstractas sirven
* para crear otras clases o para asegurarse de que otras 
* clases implementen lo que nosotros esperemos.
* Recordemos que una clase abstracta no puede ser instanciada.
* Sirve para crear otras clases o que otras clases sean extendidas
* de ella o asegurarme de que un argumento(parametro) puede ser de otro tipo
* pero siempre y cuando implemente las caracteristicas de su clase
* abstracta.


*/

(() => {
  abstract class Mutante {
    abstract fight(): string;
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {
    fight(): string {
      return `${this.name} esta peleando`;
    }
    salvarMundo() {
      return 'Mundo salvado';
    }
  }

  class Vilian extends Mutante {
    fight(): string {
      return `${this.name} esta peleando`;
    }
    conquistarMundo() {
      return 'Mundo conquistado';
    }
  }

  let wolverine: Xmen;

  wolverine = new Xmen('Wolverine', 'James Howlett');
  const magneto = new Vilian('Magneto', 'Max Eisenhardt');
  // console.log(wolverine);
  // console.log(magneto);

  const printName = (character: Mutante) => {
    console.log(character.name);
  };

  // printName(wolverine);
  // printName(magneto);
})();
