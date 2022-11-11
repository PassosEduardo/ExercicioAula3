const ligaLampada = document.getElementById('liga');
const desligaLampada = document.getElementById('desliga');
const quebraLampada = document.getElementById('quebra');
const lamp = document.getElementById("lampada");
// var estaQuebrada = false;


function LampadaEstaQuebrada () {
    return lamp.src.indexOf ('quebrada') > -1  
}

ligaLampada.addEventListener("click", () =>{
    if(!LampadaEstaQuebrada ())      
        lamp.src = "./img/ligada.jpg"
    
})

desligaLampada.addEventListener("click", () =>{
    if(!LampadaEstaQuebrada ())  
        lamp.src = "./img/desligada.jpg";
})

 quebraLampada.addEventListener("click", () =>{
    lamp.src = "./img/quebrada.jpg";
 })