window.addEventListener('load', ()=> { //Funcion para cargar el documento

//Generamos 2 constantes y guardamos los elementos que necesitamos
const display = document.querySelector('.calculator-display');
const keypadButtons = document.getElementsByClassName('keypad-button');

//Usamos esta constante para transformar el HTMLCollection a un Array
const keypadButtonsArray = Array.from(keypadButtons);

//Iteramos por nuestro nuevo array de botones
keypadButtonsArray.forEach( (button) => {

    //A cada boton le agregamos un listener que responde al click del usuario
    button.addEventListener('click', ()=> {
        calculadora(button, display);
    })
})
});

function calculadora(button, display){
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;

        case '=':
            calcular(display, button);
            break;

        default:
            actualizar(display, button);
            break;
    }
}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML)
}

function actualizar(display, button) {
    if(display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function borrar(display){
display.innerHTML = 0;
}