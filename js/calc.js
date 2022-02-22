const bodyDOM = document.querySelector('body');
const formDOM = bodyDOM.querySelector('form');
const firstNumberDOM = formDOM.querySelector('#first_number');
const actionDOM = formDOM.querySelector('#action');
const secondNumberDOM = formDOM.querySelector('#second_number');
const buttonDOM = formDOM.querySelector('button');
const resultDOM = bodyDOM.querySelector('.result');

const calc = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
};

buttonDOM.addEventListener('click', (e) => {
    e.preventDefault();
    const firstNumber = +firstNumberDOM.value;
    const secondNumber = +secondNumberDOM.value;
    const action = actionDOM.value;

    const result = calc[action](firstNumber, secondNumber);
    const text = `${firstNumber} ${action} ${secondNumber} = ${result}`;
    resultDOM.innerText = text;
})