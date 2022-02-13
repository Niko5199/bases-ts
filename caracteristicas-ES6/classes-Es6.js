(() => {
  class Avenger {
    #name;
    #power;
    constructor(name, power) {
      this.#name = name;
      this.#power = power;
    }
  }
  class FlyingAvenger extends Avenger {
    flying;
    constructor(name, power, flying) {
      super(name, power);
      this.flying = true;
    }
  }

  const hulk = new Avenger('Hulk', 9000);
  const falcon = new FlyingAvenger('Flacon', 1300, true);
  console.log(hulk);
  console.log(falcon);
})();
