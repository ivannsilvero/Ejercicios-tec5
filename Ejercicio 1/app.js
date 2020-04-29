var parrafo = document.getElementById("p");

let btn1 = document.querySelector('#b1');
let btn2 = document.querySelector('#b2');
let btn3 = document.querySelector('#b3');
let btn4 = document.querySelector('#b4');

btn1.addEventListener('click', () => {
    parrafo.textContent += "house ";
    btn1.disabled = true;
});

btn2.addEventListener('click', () => {
    parrafo.textContent += "table ";
    btn2.disabled = true;
});

btn3.addEventListener('click', () => {
    parrafo.textContent += "dog ";
    btn3.disabled = true;
});

btn4.addEventListener('click', () => {
    parrafo.textContent += "cat ";
    btn4.disabled = true;
});