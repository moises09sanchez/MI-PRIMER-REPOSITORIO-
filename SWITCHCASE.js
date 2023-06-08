function jugarJuego(opcionUsuario) {
    // Generar una opción aleatoria para la computadora
    const opciones = ["piedra", "papel", "tijeras"];
    const opcionComputadora = opciones[Math.floor(Math.random() * opciones.length)];
  
    // Mostrar las opciones elegidas por el usuario y la computadora
    console.log("Usuario: " + opcionUsuario);
    console.log("Computadora: " + opcionComputadora);
  
    // Determinar el resultado utilizando un switch-case
    switch (opcionUsuario) {
      case "piedra":
        if (opcionComputadora === "papel") {
          console.log("¡La computadora gana! Papel envuelve a piedra.");
        } else if (opcionComputadora === "tijeras") {
          console.log("¡Tú ganas! Piedra rompe tijeras.");
        } else {
          console.log("¡Es un empate!");
        }
        break;
  
      case "papel":
        if (opcionComputadora === "tijeras") {
          console.log("¡La computadora gana! Tijeras cortan papel.");
        } else if (opcionComputadora === "piedra") {
          console.log("¡Tú ganas! Papel envuelve a piedra.");
        } else {
          console.log("¡Es un empate!");
        }
        break;
  
      case "tijeras":
        if (opcionComputadora === "piedra") {
          console.log("¡La computadora gana! Piedra rompe tijeras.");
        } else if (opcionComputadora === "papel") {
          console.log("¡Tú ganas! Tijeras cortan papel.");
        } else {
          console.log("¡Es un empate!");
        }
        break;
  
      default:
        console.log("Opción inválida. Por favor, elige entre piedra, papel o tijeras.");
    }
  }
  
  // Ejemplo de uso
  jugarJuego("piedra");
  
