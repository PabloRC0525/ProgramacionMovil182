/**
 * indice validar que no sea menor a cero y que el elemento exista
 * 
 */
function getbyIdx(arr, idx){
    if (idx < 0 || arr.length <= idx) {
        return 'Elemento no existe'
    }
    return arr[idx];
}

let resultado = getbyIdx([1, 2], 0);
console.log(resultado);