// setTimeot -> ejecutar una funcion pasado x tiempo en ms;
function mensaje(){
    document.write(`<h2>Hola mundo</h2>`);
}

window.setTimeout(mensaje, 3000);
setTimeout(mensaje, 4000);

setTimeout(()=>{
    document.write(`<p>Esta es otra funcion</p>`);
}, 5000);


// setInterval