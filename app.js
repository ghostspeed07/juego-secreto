let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
titulo.innerHTML = texto;
return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el ususario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero es menor');
        } else {
            asignarTextoElemento('p','El numero es mayor');
        }
        intentos++;
        limpiarCaja();

    }
    return;
}
//funcion limpiar el numero escrito.
function limpiarCaja() {
   let valorCaja = document.querySelector('#valorUsuario').value = '';
}
//generar el numero aleatorio.
function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
  console.log(numeroGenerado);
  console.log(listaNumeroSorteados);
  //si ya sortea todos los numeros
  if (listaNumeroSorteados.length == numeroMaximo) {

    asignarTextoElemento('p','ya se sortearon todos los numeros posibles');

  }else{


  //si el numero generado esta incluido en la lista


  if (listaNumeroSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
  }else{
    listaNumeroSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
}
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto!' );
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}` );
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja 
    limpiarCaja();
    //indicar mensaje de intervalo de numeros 
    //generar el numero aletoroio 
    //inicializar el numero de intentos 
    condicionesIniciales();
    //desabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();