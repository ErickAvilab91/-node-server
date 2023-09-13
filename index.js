class Tarea {
    constructor(indicador, descripcion) {
      this.indicador = indicador;
      this.descripcion = descripcion;
      this.completada = false;
    }
  }
  
  class ListaDeTareas {
    constructor() {
      this.tareas = [];
    }
  
    añadirTarea(tarea) {
      return new Promise((resolve, reject) => {
        this.tareas.push(tarea);
        resolve(this.tareas);
      });
    }
  
    eliminarTarea(indicador) {
      return new Promise((resolve, reject) => {
        const index = this.tareas.findIndex(tarea => tarea.indicador === indicador);
        if (index !== -1) {
          this.tareas.splice(index, 1);
          resolve(this.tareas);
        } else {
          reject('Tarea no encontrada');
        }
      });
    }
  
    completarTarea(indicador) {
      return new Promise((resolve, reject) => {
        const tarea = this.tareas.find(tarea => tarea.indicador === indicador);
        if (tarea) {
          tarea.completada = true;
          resolve(tarea);
        } else {
          reject('Tarea no encontrada');
        }
      });
    }
  }
// async, await
(async () => {
    const lista = new ListaDeTareas();
    try {
      await lista.añadirTarea(new Tarea(1, 'Hacer las compras'));
      await lista.completarTarea(1);
      console.log(lista.tareas);
    } catch (error) {
      console.error(error);
    }
  })();

  // then ()

  const lista = new ListaDeTareas();
lista.añadirTarea(new Tarea(1, 'Hacer la compra'))
  .then(() => lista.completarTarea(1))
  .then(() => console.log(lista.tareas))
  .catch(error => console.error(error));node