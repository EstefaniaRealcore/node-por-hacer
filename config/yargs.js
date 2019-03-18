const opts1 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea'
    }
};

const opts2 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la lista de tareas', {})
    .command('crear', 'Crea un elemento por hacer', opts1)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opts2)
    .command('borrar', 'Elimina una tarea', opts1)
    .help()
    .argv;

module.exports = {
    argv
}