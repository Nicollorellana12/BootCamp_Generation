//Crear una función sumaArreglo() que tome como parámetro un arreglo de números, retornar la longitud del arreglo + la suma de todos los números del arreglo.
// [1,2,3,4] = 
// longitud = 4

function sumaArreglo(lista) {
    longitud = lista.length
    contador = 0
    for (var i = 0; i < lista.length; i++) {
        contador = contador + lista[i]
    }
    console.log(contador + longitud)

}

sumaArreglo([20, 4, 6, 10])