window.addEventListener('load', ()=> {

const display = document.querySelector('.calculator-display');
const keypadButtons = document.getElementsByClassName('keypad-buttom');

const keypadButtonsArray = Array.from(keypadButtons);

keypadButtonsArray.forEach((button) => {
    button.addEventListener('click', ()=> {
        console.log(button.innerHTML);
    })
})

});