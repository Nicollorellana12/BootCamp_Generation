
// Definir un objeto con propiedades y método
const producto = {
    precio: 2000,
    descuento: 200,
    neto: function() {
      return this.precio - this.descuento;
    }
  };
  
  // Mostrar por consola las propiedades del objeto y el precio neto
  console.log("Precio: " + producto.precio);
  console.log("Descuento: " + producto.descuento);
  console.log("Precio Neto: " + producto.neto());

  