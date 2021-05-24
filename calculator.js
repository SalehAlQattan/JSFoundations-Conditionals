const prompt = require('prompt-sync')(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
// const name = prompt("What's your name? ");
// console.log(`Hi, I'm ${name}.`);

const firstNumber = prompt('Please Enter The First Number: ');
const secondNumber = prompt('Please Enter The Second Number: ');
const operator = prompt('Please Choose the operation (+, -, /, *): ');

if (operator === '+') {
  console.log(
    `${firstNumber} + ${secondNumber} = ${
      parseInt(firstNumber) + parseInt(secondNumber)
    }`
  );
} else if (operator === '-') {
  console.log(
    `${firstNumber} - ${secondNumber} = ${
      parseInt(firstNumber) - parseInt(secondNumber)
    }`
  );
} else if (operator === '*') {
  console.log(
    `${firstNumber} * ${secondNumber} = ${
      parseInt(firstNumber) * parseInt(secondNumber)
    }`
  );
} else if (operator === '/') {
  console.log(
    `${firstNumber} / ${secondNumber} = ${
      parseInt(firstNumber) / parseInt(secondNumber)
    }`
  );
}
