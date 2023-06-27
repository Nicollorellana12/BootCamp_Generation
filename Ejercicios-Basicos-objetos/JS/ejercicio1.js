//Crea un objeto con las propiedades: nombre, apellido, edad, email, dirección y muestra los valores de cada propiedad
const persona = {
    nombre: "nicol",
    apellido: "orellana",
    edad: 29,
    email: "nicolOrellana@mg.com",
    direccion: "lircay, 123",
    mostrarInformacion: function() {
      console.log("Nombre: " + this.nombre);
      console.log("Apellido: " + this.apellido);
      console.log("Edad: " + this.edad);
      console.log("Email: " + this.email);
      console.log("Dirección: " + this.direccion);
    }
  };


// explicado por felipe 

// const nombreInput = prompt("Cual es tu nombre");
// const apellidoInput = prompt("Cual es tu apellido");
// const emailInput = prompt("Cual es tu email");
// const direccionInput = prompt("Cual es tu direccion");

// datos = {
//     nombre: nombreInput,
//     apellido: apellidoInput,
//     email: emailInput,
//     direccion: direccionInput
// }

// console.log(Object.values(datos))
  
  // Mostrar los valores de cada propiedad utilizando la función de objeto
  persona.mostrarInformacion();
  