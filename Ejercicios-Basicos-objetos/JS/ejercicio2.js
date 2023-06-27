//Crear un objeto que se usa para guardar información sobre las calificaciones de un alumno. El curso contiene tres materias: Inglés, programación y HTM, y el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. El script imprimirá el nombre y la media(promedio) de sus calificaciones.

const alumno = {
    nombre: "Nicol Orellana",
    ingles: 70,
    programacion: 45,
    html: 65,
    obtenerPromedio: function() {
      const cantidadMaterias = 3;
      const sumaNotas = this.ingles + this.programacion + this.html;
      return sumaNotas / cantidadMaterias;
    }
  };
  
  // Imprimir el nombrre y promedio de notas 
  console.log("Nombre del alumno: " + alumno.nombre);
  console.log("Promedio de Notas: " + alumno.obtenerPromedio());
  
