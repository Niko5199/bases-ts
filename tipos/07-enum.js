"use strict";
/*
 * La cosa esta de que el uso de las enumeraciones ayuda a trabjar con
 * valores que tengan un sentido semantico visualmente facil de leer
 * para javascript es una funcion la cual verifica si tenemos el audio
 *
 * Las enumeraciones permiten a un desarrollador definir un conjunto de
 * constantes con nombre. El uso de enumeraciones puede facilitar la
 * documentación de la intención o la creación de un conjunto de casos
 * distintos. TypeScript proporciona enumeraciones numéricas y basadas
 * en cadenas.
 *
 * El valor de dichas constantes si son numeros son consecutivos a menos que
 * asignemos unos valores a ellos.
 */
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let LogLevel;
    (function (LogLevel) {
        LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
        LogLevel[LogLevel["WARN"] = 1] = "WARN";
        LogLevel[LogLevel["INFO"] = 2] = "INFO";
        LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
    })(LogLevel || (LogLevel = {}));
    const currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(LogLevel);
})();
