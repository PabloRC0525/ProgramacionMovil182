
//function

/*function suma(a,b){
    return a+b;
}

console.log(suma(2,3));

//function fatArrow
const suma=(a,b)=>{
    return a+b;
}

const suma=(a,b)=> a+b;


console.log(suma(2,3));
*/
/*
const usuario={
    nombre:'Ivan',
    apellido:'Guerra',
    edad: 36,
    direccion: {
        pais: 'Mexico',
        ciudad: 'Queretaro',
        calle: 'La misma 123'
    },
    amigos: ['Alex', 'Carlos'],
    estatus: true,
    enviaCorreo: enviarCorr=()=>'enviando...'
}
/*
/*
//propiedades
//console.log(usuario);
//console.log(usuario.direccion.calle);
//console.log(usuario.amigos);

//Metodos
console.log(usuario.enviaCorreo());
*/
/*
//Trabajo co  el DOM
const titulo= document.createElement('h1');
titulo.innerText='Soy un titulo creado con JS';
document.body.append(titulo);

const boton= document.createElement('button');
boton.innerText='Presioname';
document.body.append(boton);

boton.addEventListener('click',function(){
    //console.log('Evento click ejecutano')
    titulo.innerText="Evento click ejecutado";
    alert('Exito');
});
*/

//24/05
//Trabajo con Arreglos
/*
const nombres= ['Alan', 'Isa', 'Pablo', 'Juan Luis'];
*/
/*
for( let i = 0; i <nombres.length; i++){
    const elemento= nombres[i];
    console.log(elemento);
}

nombres.forEach(function(nombre){
    console.log(nombre);
})
*/
//Funcion MAP: Permite generar copia de un Array
/*
const array2= nombres.map(function(nombre){
    console.log(nombre);
    return nombre;
})

console.log(nombres);
console.log(array2)
*/
//Funcion Find: Ubicar elementos en un arreglo
/*
const resultado= nombres.find(function(nombre){
    if(nombre==='Pablo'){
        return nombre;
    }; 
})
console.log(resultado);
*/
//Funcion Filter: recorre el arreglo filtrando resultado en otro
/*
const resultado= nombres.filter(function(nombre){
    if(nombre !='Pablo'){
        return nombre;
    }; 
})
console.log(nombres);
console.log(resultado);
*/
/*
//Función Concat: 
const edades=[78, 89, 12, 8, 10, 15]
console.log(nombres.concat(edades))

//Spread Operator
console.log([...nombres, ...edades])

*/

//Modulos: Import & Export

import * as calc from "./calculadora.js"
console.log(calc.suma(45, 54))
console.log(calc.resta(45, 54))