function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario
let user = new U ('Nicolas')
console.log(user);

function of(Fn, arg) {
    return new Fn(arg);
}

let user1 = of(Usuario, 'Chanchito');
console.log(user1);
function retuned() {
    return function() {
        console.log ('Hola Mundo');
    }
}

let saludo = retuned();
saludo();