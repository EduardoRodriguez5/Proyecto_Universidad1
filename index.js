const button = document.getElementById("btn-ofert");
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');
const limpieza = document.getElementById("btn-limpieza");
const aceite = document.getElementById("btn-aceite");
const itv = document.getElementById("btn-itv");
const ruedas = document.getElementById("btn-ruedas");
const oferta = document.getElementById("btn-oferta");
const pLimpieza = document.getElementById("p-limpieza");
const pAceite = document.getElementById("p-aceite");
const pItv = document.getElementById("p-itv");
const pRuedas = document.getElementById("p-ruedas");
const pOferta = document.getElementById("p-oferta");
const total = document.getElementById("total");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

let cLimpieza = 0;
let cAceite = 0;
let cItv = 0;
let cRuedas = 0;
let cOferta = 0;
$(document).ready(function(){
    $(window).scroll(function(){
        var barra = $(window).scrollTop();
        var posicion = barra * .15;

        $('.container-conocenos').css({
            'background-position': '0 -' + posicion + 'px'
        });
    });
});
button.addEventListener('click', () => {  
    popup.style.display = 'block';
});
 
close.addEventListener('click', () => {
    popup.style.display = 'none';
});
 
popup.addEventListener('click', e => {
   
    if(e.target.className === 'popup-wrapper') {
        popup.style.display = 'none';
    }
});

limpieza.addEventListener("click", () =>{

    cLimpieza += 1;
    presupuesto();

})

aceite.addEventListener("click", () =>{

    cAceite += 1;
    presupuesto();

})
itv.addEventListener("click", () =>{

    cItv += 1;
    presupuesto()

})
ruedas.addEventListener("click", () =>{

    cRuedas += 1;
    presupuesto()

})
oferta.addEventListener("click", () =>{

    cOferta += 1;
    presupuesto()

})

function presupuesto(){

    resultado = (cLimpieza * 22) + (cAceite * 62) + (cItv * 93) + (cRuedas * 279) + (cOferta * 108);

    if(cLimpieza !=0){

        pLimpieza.innerHTML = "Limpieza de coche:" + cLimpieza;

    }
    if(cAceite !=0){
        pAceite.innerHTML = "Cambio de aceite:" + cAceite;

    }
    if(cItv !=0){
        pItv.innerHTML = "Revisión para itv:" + cItv;

    }
    if(cRuedas !=0){
        pRuedas.innerHTML = "Cambio de las ruedas:" + cRuedas;

    }
    if(cOferta !=0){
        pOferta.innerHTML = "Oferta:" + cOferta;

    }

    total.innerHTML = "El total es: " + resultado + "€";
}

