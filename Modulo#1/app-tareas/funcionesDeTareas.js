const fs = require("fs");

let archivoTareas={
    archivo : "./tareas.json",
    leerTareas : function(){
        return JSON.parse(fs.readFileSync(archivoTareas.archivo,"utf-8"));
    },
    escribirJSON : (tareas) =>{
        fs.writeFileSync(archivoTareas.archivo , JSON.stringify(tareas)); 
    },
    guardarTarea : (tarea) =>{
        let tareas = archivoTareas.leerTareas();
        tareas.push(tarea);
        archivoTareas.escribirJSON(tareas);
    },
    leerPorEstado : (estado) =>{
        let tareas= archivoTareas.leerTareas();
        let tareasFiltradas = tareas.filter(tarea =>{
            return tarea.estado === estado;
        })
        return tareasFiltradas;
    }
}

module.exports = archivoTareas;