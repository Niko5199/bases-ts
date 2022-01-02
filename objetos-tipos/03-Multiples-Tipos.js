"use strict";
(() => {
    let myCustomVariable = 'Josue';
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
