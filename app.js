const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

// console.log(argv);

let comando = argv._[0]; //cogemos posición 0 del array de acciones del comando

switch (comando) {
    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('=======Por hacer =========');
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('================');
        }

        break;

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'actualizar':
        if (porHacer.actualizar(argv.descripcion, argv.completado)) {
            console.log('Tarea actualizada correctamente');
        } else {
            console.log('Error al actualizar la tarea');
        }
        break;

    case 'borrar':
        if (porHacer.borrar(argv.descripcion)) {
            console.log('Tarea eliminada correctamente');
        } else {
            console.log('Error al eliminar');
        }
        break;

    default:
        console.log('comando no reconocido');
}