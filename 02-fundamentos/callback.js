/* EJEMPLO CALLBACK
setTimeout(() => {
    console.log('Hola Mundo');
}, 3000);
*/

let getUsuaruoById = (id, callback) => {
    let usuario = {
        nombre: 'Sebastian',
        id
    }
    if (id === 20) {
        callback(`El usuario con id ${ id }, no existe en la BD`);
    } else {
        callback(null, usuario);
    }
}

getUsuaruoById(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    } else {
        console.log('Usuario de base de datos', usuario);
    }
});