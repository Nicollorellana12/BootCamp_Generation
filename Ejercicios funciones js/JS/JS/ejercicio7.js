//Crear una función con el nombre de funcionArray() que tome dos arreglos de números enteros como parámetro y retornar un único arreglo, cada elemento del arreglo debe estar multiplicado por dos. ej: [2,5,2][1,5,3] -> [4,10,4,2,10,6].

function funcionArray(array,array2){
        let nuevoArreglo2= array.concat(array2);
       let arregloMultiplicado= nuevoArreglo2.map((nuevoArreglo2)=>nuevoArreglo2*2)
     return arregloMultiplicado
    }
    console.log(funcionArray([1,2,3],[4,5,6]))