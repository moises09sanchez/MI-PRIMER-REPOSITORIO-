
function telephoneCheck(str) {
    // Expresión regular para validar el formato del número de teléfono
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\-\s]?\d{3}[\-\s]?\d{4}$/;
  
    // Validar el formato del número de teléfono
    return regex.test(str);
  }
  
  // Ejemplo de uso
  var numero = "555-555-5555";
  if (telephoneCheck(numero)) {
    console.log(numero + " es un número de teléfono válido.");
  } else {
    console.log(numero + " no es un número de teléfono válido.");
  }
  
  
