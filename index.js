const readline = require('readline');

let tareas = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log('1. Añadir tarea');
    console.log('2. Eliminar tarea');
    console.log('3. Completar tarea');
    console.log('4. Mostrar tareas');
    console.log('5. Salir');
}

function añadirTarea() {
    rl.question('Introduce la descripción de la tarea: ', (descripcion) => {
        const tarea = {
            indicador: tareas.length + 1,
            descripcion,
            completada: false
        };
        
        tareas.push(tarea);
        
        console.log(`Tarea añadida: ${JSON.stringify(tarea)}`);
        
        mostrarMenu();
        elegirOpcion();
    });
}

function eliminarTarea() {
    rl.question('Introduce el indicador de la tarea a eliminar: ', (indicador) => {
        indicador = Number(indicador);
        
        tareas = tareas.filter(tarea => tarea.indicador !== indicador);
        
        console.log(`Tarea ${indicador} eliminada`);
        
        mostrarMenu();
        elegirOpcion();
    });
}

function completarTarea() {
    rl.question('Introduce el indicador de la tarea a completar: ', (indicador) => {
        indicador = Number(indicador);
        
        for (let tarea of tareas) {
            if (tarea.indicador === indicador) {
                tarea.completada = true;
                console.log(`Tarea ${indicador} completada`);
                break;
            }
        }
        
        mostrarMenu();
        elegirOpcion();
    });
}

function mostrarTareas() {
    for (let tarea of tareas) {
        console.log(JSON.stringify(tarea));
    }
    
    mostrarMenu();
    elegirOpcion();
}

function elegirOpcion() {
    rl.question('Elige una opción: ', (opcion) => {
        switch (opcion) {
            case '1':
                añadirTarea();
                break;
            case '2':
                eliminarTarea();
                break;
            case '3':
                completarTarea();
                break;
            case '4':
                mostrarTareas();
                break;
            case '5':
                rl.close();
                break;
            default:
                console.log('Opción no válida');
                mostrarMenu();
                elegirOpcion();
                break;
        }
    });
}

mostrarMenu();
elegirOpcion();
