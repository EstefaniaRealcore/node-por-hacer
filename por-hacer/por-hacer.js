const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    return new Promise((resolve, reject) => {
        fs.writeFile('db/data.json', data, (err) => {
            if (err)
                reject(err);
            else
                resolve('Datos guardados correctamente');
        });
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        // descripcion: descripcion, esta línea es igual a la de abajo en ES6
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB()
        .then(archivo => console.log(archivo))
        .catch(err => console.log(err));

    return porHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    //Buscar elemento en el array. Si no lo encuentra devuelve -1
    //La variable 'tarea' corresponde con cada objeto dentro del array listadoPorHacer
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const borrar = (descripcion) => {
    cargarDB();

    let nuevolistado = listadoPorHacer.filter(tareas => tareas.descripcion !== descripcion);

    if (nuevolistado === listadoPorHacer) {
        return false;
    } else {
        listadoPorHacer = nuevolistado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}