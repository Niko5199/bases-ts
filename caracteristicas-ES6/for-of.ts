(() => {
  type Avenger = {
    name: string;
    weapongs: string;
  };

  const ironMan: Avenger = {
    name: 'Iron Man',
    weapongs: 'Armonsuit',
  };
  const captainAmerica: Avenger = {
    name: 'Captain America',
    weapongs: 'Shield',
  };
  const thor: Avenger = {
    name: 'Thor',
    weapongs: 'Mjolnir',
  };

  const avengers: Avenger[] = [ironMan, captainAmerica, thor];
  for (const avenger of avengers) {
    // console.log(avenger.name, avenger.weapongs);
  }
})();
