//requireds
//const fs = require('fs');
//const fs = require('express');   //paquetes no nativos de node
//const fs = require('./fs');      //archivos que nosotros escribimos
const { crearArchivo } = require('./multiplicar/multiplicar');

//let base = '5';

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=');

console.log(base);



/*
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));
*/