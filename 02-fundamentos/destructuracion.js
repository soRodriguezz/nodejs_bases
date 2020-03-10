let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`;
    }
};

/* MUESTRA TODO LO DE LA VARIABLE
console.log(deadpool.getNombre());
*/

/* ORGANIZAR CADA DATO DENTRO DE UNA VARIABLE. 
let nombre = deadpool.nombre;
let apellido = deadpool.apellido;
let poder = deadpool.poder;
*/

/* OCUPAR TODOS LOS DATOS DE LA VARIABLE DEADPOOL EN UNA SOLA LINEA.
let { nombre, apellido, poder } = deadpool;
console.log(nombre, apellido, poder);
*/

// CAMBIAR IDENTIFICADOR DE EL NOMBRE DE LAS VARIBLES PARA LLAMARLOS, POR EJEMPLO EL NOMBRE EN ESTE CASO.
let { nombre: primerNombre, apellido, poder } = deadpool;
console.log(primerNombre, apellido, poder);