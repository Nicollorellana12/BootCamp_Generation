// Crear una función multiplicarArreglo() que tome como parámetro un arreglo de números, retornar la multiplicación del número menor del arreglo y el número mayor del arreglo.
function multiplicarArreglo(arreglo){
        let mayor = Math.max(...arreglo);
        let menor= Math.min(...arreglo)
         resultado = mayor * menor
         return resultado
    }
    function resultadoTotal(arreglo){
        let resultado = multiplicarArreglo(arreglo)
        return `el resultado es ${resultado}`
    }
    
    console.log(resultadoTotal([1,2,3,4,5,6]))