
function insertarTarea(evento) {
    evento.preventDefault()

    let tarea = document.getElementById("tarea").value;

    if (tarea == "" || tarea.length < 3){
        alert("Ingresa un nombre que sea válido")
    }
    else{
       
        let opcion = "<li>" + tarea + "</li>"
        
    
        let lista = document.getElementById("lista")

        lista.innerHTML += opcion;      
        ingresoTareas.reset()  
    }
    
}