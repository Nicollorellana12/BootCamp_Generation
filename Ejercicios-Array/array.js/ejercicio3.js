
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

// Solicitar al usuario un número entre 0 y 11
const numeroMes = parseInt(prompt("Ingresa un número entre 0 y 11:"));

// Obtener el nombre del mes correspondiente
const nombreMes = meses[numeroMes];

// Mostrar el nombre del mes por la consola
console.log("El mes correspondiente al número " + numeroMes + " es " + nombreMes + ".");

