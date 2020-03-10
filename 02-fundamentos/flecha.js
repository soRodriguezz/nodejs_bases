/* FUNCION NORMAL
function sumar(a, b) {
    return a + b;
}
*/

/* FUNCION DE FLECHA NORMAL
let sumar = (a, b) => a + b;
*/

/* EJEMPLO FUNCION DE FLECHA
let saludar = () => 'Hola Mundo';

console.log(saludar());
*/

// FUNCION FLECHA NORMAL.
let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`;
    }
};

console.log(deadpool.getNombre());