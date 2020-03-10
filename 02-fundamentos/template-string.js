let nombre = 'Deadpool';
let real = 'Wade Winston';

/* EJEMPLO DE USO DE TEMPLATE LITERALES.
console.log(nombre + ' ' + real);
//templates literales. 
console.log(`${ nombre } ${ real }`);
*/

/* USO DE TEMPLATE LITEALES CON VARIABLES YA CONCATENADAS. 
let nombreCompleto = nombre + ' ' + real;
let nombreTemplate = `${ nombre } ${ real }`;

console.log(nombreCompleto === nombreTemplate);
*/

// EJEMPLO DE FUNCION CON TEMPLATE LITERALES.
function getNombre() {
    return `${ nombre} ${ real }`;
}

console.log(`El nombre de: ${ getNombre() }`);