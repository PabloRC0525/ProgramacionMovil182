
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
//propiedades
//console.log(usuario);
//console.log(usuario.direccion.calle);
//console.log(usuario.amigos);

//Metodos
console.log(usuario.enviaCorreo());
*/

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

