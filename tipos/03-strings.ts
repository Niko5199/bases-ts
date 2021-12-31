(() => {
  //* Hay 4 formas de definir strings
  const batman: string = 'Batman';
  const GreenLantern: string = 'Green Lantern';
  const volcanNegro: string = `Heroe: Volcan Negro`;
  const abc: number = 123;
  console.log(`I'm ${batman}, ${abc}`);

  console.log(batman[10]?.toUpperCase() || 'No esta presente');
})();
