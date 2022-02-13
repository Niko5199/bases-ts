/*
 * Estructuras complejas
 * Usualmente cuando estemos trabajando en TypeScript, y la
 * interfaz ya tiene mas de un nivel, es decir un objeto
 * dentro de otro objeto, no es recomendado que nosotros
 * empecemos anidar este tipo de tipado porque lo que hace
 * un poco dificil de entender y mantener. Ahora lo que se
 * recomienda es que creemos una interfaz para ese nivel
 * extra o niveles extra.
 *
 * Ahora como dato extra en las interfaces, podemos definir
 * el tipado antes de que exista la interfaz. Y esto esta bien
 * ya que el orden de las interfaces es que primero se encuentre
 * la interfaz principal, y luego las interfaces que esten dentro
 * de ella.
 *
 * Clase 39. Metodos en la interfaz
 *
 * Al igual que los tipos, las interfaces nos permiten definir
 * tambien como queremos que luzcan los metodos que tenemos, pueden
 * ser opcionales o obligatorios. Ahora para tipar los metodos
 * es un poco similar a los tipos personalizados pero lo que cambia
 * es que podemos hacerlo de la siguiente manera:
 *
 * nombreMetodo(parametro: tipo): tipoRetorno
 *
 * Notemos que una clase implementaria este metodo lo tendria que }
 * implementar una interface no lo implementa, es decir, no tiene
 * la logica para resolverlo, simplemente esta esperando de que un
 * objeto que luzca o que sea de tipo client, no importa como lo
 * implemente debe de contener este metodo que definimos.
 */
(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): void;
  }

  interface Address {
    id?: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: 'Josue',
    age: 22,
    address: {
      id: 125,
      zip: 'KY2 NDE',
      city: 'Londres',
    },
    getFullAddress() {
      return 'Hola ';
    },
  };
})();
