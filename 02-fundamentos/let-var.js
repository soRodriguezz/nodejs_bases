//var funciona de manera global y se puede reemplazar en cualquier momento
/*
var nombre = 'Wolverine';

if (true) {
    //let solo funciona dentro de funciones o una sola area
    let nombre = 'Magneto';
}

console.log(nombre);

*/

// si ocupo 'i' con let para crearla solo tomara valor dentro del primer console.log, el segundo no existe fuera del for.
for (var i = 0; i <= 5; i++) {
    console.log(`i: ${ i }`);
}

console.log(i);