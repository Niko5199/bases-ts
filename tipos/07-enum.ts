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
  enum AudioLevel {
    min = 1,
    medium,
    max = 10,
  }

  enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG,
  }
  const currentAudio = AudioLevel.medium;
  console.log(currentAudio);

  console.log(LogLevel);
})();
