(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  };
  let myCustomVariable: string | number | Hero = 'Josue';

  console.log(typeof myCustomVariable);

  myCustomVariable = 20;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: 'Bruce',
    age: 30,
    powers: [1],
  };
  console.log(typeof myCustomVariable);
})();
