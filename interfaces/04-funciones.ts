(() => {
  interface AddToNumbers {
    (a: number, b: number): number;
  }

  let addNumberFunction: AddToNumbers;

  addNumberFunction = (a: number, b: number): number => {
    return a + b;
  };
})();
