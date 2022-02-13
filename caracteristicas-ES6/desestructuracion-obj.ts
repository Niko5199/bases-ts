(() => {
  type Heroes = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };
  const avengers: Heroes = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500,
  };

  const { nick: nic, activo: act } = avengers;
  // console.log(nic, act);

  const copyAvengers = { ...avengers };
  // console.log(copyAvengers);

  function printHeroes(heroes: Heroes) {
    const { nick, ironman, vision, activo, poder } = heroes;
    // console.log(nick, ironman, vision, activo, poder);
  }

  // * Desestructuración de objeto en parámetros
  function iron({ ironman: ironmanName, poder: ironmanPoder }: Heroes) {
    // console.log(ironmanName, ironmanPoder);
  }

  printHeroes(avengers);
  iron(avengers);
})();
