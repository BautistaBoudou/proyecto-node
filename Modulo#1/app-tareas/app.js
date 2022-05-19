const archivoTareas = require("./funcionesDeTareas");
switch(process.argv[2]){
    case "listar" :
        let file = archivoTareas.leerTareas()
        console.log("-------------------");
        console.log("-------------------");
        console.log("Listado"); 
        file.forEach((tarea,index) => {
            console.log(`${index + 1}. ${tarea.titulo}`)
        });
        console.log("-------------------");
        console.log("-------------------");
        break;
    case "crear" : 
        let titulo = process.argv[3];
        if (titulo){
            let tarea ={
                titulo: titulo,
                estado: "pendiente"
            }
            archivoTareas.guardarTarea(tarea)
            console.log("Tarea creada");
        }else{
            console.log("No se pudo crear la tarea sin título");
        }
    break;
    case "filtrar":
        console.log("Filtrando tareas...")
        let estado = process.argv[3];
        if(estado){
            let filtradas = archivoTareas.leerPorEstado(estado)
            filtradas.forEach((tarea, index) => {
                console.log(`${index +1}. ${tarea.titulo}`);
            });
        
        }else{
            console.log("No se pudo filtrar las tareas")
        }
    break;
    case undefined :
        console.log("Procesando...");
        console.log("-------------------");
        console.log("ATENCIÓN -- Se pide que pases una acción");
        break;
    default :
        console.log("SE ROMPIÓ");
        console.log("-------------------");
        console.log("Para ver el listado, debes ejecutar la acción ( listar ) por la terminal");
        console.log("-------------------");
        console.log("Para crear una tarea, ejecutar la acción (crear) seguido del titulo por la terminal ")
        console.log("-------------------");
        console.log("Para ver las tareas por estado, ejecutar la acción (filtrar) seguido del estado ");
        console.log("-------------------");

}