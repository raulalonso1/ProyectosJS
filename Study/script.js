const boton1 = document.getElementById('a1');
const boton2 = document.getElementById('a2');
const boton3 = document.getElementById('a3');
// const boton4 = document.getElementById('a4');
const boton5 = document.getElementById('a5');

boton1.addEventListener('click',cambioTexto);
boton2.addEventListener('click',cambiarFondo);
boton3.addEventListener('click',cambiarBotonColor);
// boton4.addEventListener('click',cambiarOrdenBotones());
boton5.addEventListener('click',volverOriginal);

const body = document.getElementsByClassName('body');

const textoBoton1 = boton1.textContent;

const frases = [
    "Hola,¿Cómo estás?",
    "Raul polla azul",
    "Texto cambiado",
    "Friz es un enano",
    "Sonia es menor"
];
const colores = [
    ' linear-gradient(to bottom, #ff9999, #ffcc66, #99ff99)',
    ' linear-gradient(to right, #66ccff, #3399ff, #cc66ff, #9933ff)',
    ' linear-gradient(to bottom right, #ffcc66, #ff9900, #ccff99, #33cc33, #006600)',
    ' linear-gradient(to top left, #99ccff 10%, #336699 30%, #ff6666 60%, #ffcc66 90%)',
    ' linear-gradient(45deg, #FFD700, #FF6347, #48D1CC, #4B0082)',
    ' repeating-linear-gradient(to right, #ffcc99 0, #ffcc99 20px, #ff6666 20px, #ff6666 40px)'
];
let botones = document.querySelectorAll('p');




function longitudArrayFrases(){
    return frases.length;
}
function longitudArrayColores(){
    return colores.length;
}
function cambioTexto(){
    let i = Math.floor(Math.random() * longitudArrayFrases());
    boton1.textContent = frases[i];
}
function cambiarFondo(){
    let i = Math.floor(Math.random() * longitudArrayColores());
    document.body.style.background = colores[i];
}
function volverOriginal(){
    document.body.style.background = '#4a4a4a';
    boton1.textContent = textoBoton1;
    cambiarBotonColorDefault()
}

function cambiarBotonColor(){
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    botones.forEach(parrafo => {
        parrafo.style.background = randomColor;
    });
}
function cambiarBotonColorDefault(){
    botones.forEach(parrafo => {
        parrafo.style.background = 'red';
    })
}

function cambiarOrdenBotones(boton1,boton2,boton3,boton4){
    
}


//Extra
function hacerRGB(){
    cambiarBotonColor();
    setTimeout(function(){
        hacerRGB()
    },2000)
    
}


function invocarFotos(){
    ''
}
