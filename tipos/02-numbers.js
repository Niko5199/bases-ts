"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('We are problems');
    }
    else {
        console.log('We are safe');
    }
    avengers = Number('55A');
    console.log({ avengers });
})();
