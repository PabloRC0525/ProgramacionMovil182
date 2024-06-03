//Ejercicio 1

const numeros =[9, 2, 8, 7, 5, 6, 6, 1, 3, 4, 2, 8, 1, 7, 6];

const ul= document.createElement('ul')

async function pares(){
    const par = numeros.filter(function (numero){
        if (numero % 2 ==0){
            return numero
        };
    })
    console.log(numeros);    
    console.log(par);
}
pares();

//Ejercicio 2

const estudiantes = [ { name: 'Mane', age: 15 }, { name: 'Andrea', age: 22 }, { name: 'Alma', age: 19 }, {
    name: 'Emma', age: 29 }, { name: 'Maria ', age: 13 },{ name: 'Luis', age: 16 },{ name: 'Yair', age: 21 },];

async function mayores(){
    const mayor = estudiantes.filter(function (estudiante){
        if (estudiante.age > 18){
            return estudiante
        };
    })
    console.log(estudiantes);    
    console.log(mayor);
}
    mayores();