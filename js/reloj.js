function obtenerFecha(){
    let fecha = document.querySelector('#fecha'); 
    let hora = document.querySelector('#hora'); 
    let fechaActual = new Date();
    // console.log(fechaActual)
    // console.log(fechaActual.getDate()); // 1-31
    // console.log(fechaActual.getDay()); // 0-6
    // console.log(fechaActual.getMonth()); // 0-11
    // console.log(fechaActual.getFullYear()); 
    
    // Array de días de la semana
    const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    
    // Array de meses
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    fecha.innerHTML = `${daysOfWeek[fechaActual.getDay()]} ${fechaActual.getDate()} de ${months[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`
    
    // agregar la correccion para mostrar las horas, minutos y segundos con dos digitos, cuando el valor sea menor a 10.
    
    hora.innerHTML =`${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()}`
    // Martes 11 de Abril del 2023
    // 10:35:00
}

setInterval(obtenerFecha,1000);
