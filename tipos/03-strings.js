"use strict";
(() => {
    var _a;
    //* Hay 4 formas de definir strings
    const batman = 'Batman';
    const GreenLantern = 'Green Lantern';
    const volcanNegro = `Heroe: Volcan Negro`;
    const abc = 123;
    console.log(`I'm ${batman}, ${abc}`);
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta presente');
})();
