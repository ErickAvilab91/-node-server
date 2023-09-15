const express = require('express');
const app = express();
let id = 1;

let tareas = [
    { id: id++, descripcion: 'Tarea Server Lista de Tareas', estado: 'completado' },
    { id: id++, descripcion: 'Tarea actualizar curriculum', estado: 'pendiente' },
    { id: id++, descripcion: 'Ponerme al dia con las clases de Ada', estado: 'pendiente' },
    { id: id++, descripcion: 'Actualizar mi linkedin', estado: 'completado' },

    
];

app.get('/tareas', (req, res) => {
    res.json(tareas);
});

app.listen(8000, () => {
    console.log('Servidor corriendo en http://localhost:8000/tareas');
});
