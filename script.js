const ligaLampada = document.getElementById('liga');
const desligaLampada = document.getElementById('desliga');
const lamp = document.getElementById("lampada");


ligaLampada.addEventListener("click", () =>{
        lamp.src = './img/ligada.jpg';   
})

desligaLampada.addEventListener("click", () =>{
    lamp.src = "./img/desligada.jpg";
})

 