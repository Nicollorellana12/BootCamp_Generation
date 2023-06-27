//Crear una función con el nombre de booleanoArray() que tome dos arreglos de números como parámetro y que retorne un booleano, unir los dos arreglos en uno solo, si la longitud del nuevo arreglo es mayor o igual a 10 que retorne true si es menor a 10 que retorne false.
function boleanoArray(array, array2){
        let nuevoArreglo= array.concat(array2)
        return nuevoArreglo
       }
    
       function longitud(nuevoArreglo) {
        if (nuevoArreglo.lenght >=10){
            return true
        }
        else{
            return false
        }
       }
    console.log(boleanoArray([1,2,3,4],[5,6,7,8]))