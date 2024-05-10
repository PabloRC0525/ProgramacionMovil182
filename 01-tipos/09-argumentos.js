function suma(a, b){
    console.log(arguments)
    return a + b;
}

suma(5);
let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof suma());