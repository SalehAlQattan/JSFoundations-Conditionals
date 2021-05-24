const firstNumber = 3;
const secondNumber = 5;
const operator = '+';

operator === '+'
  ? console.log(
      `${firstNumber} + ${secondNumber} = ${
        parseInt(firstNumber) + parseInt(secondNumber)
      }`
    )
  : operator === '-'
  ? console.log(
      `${firstNumber} - ${secondNumber} = ${
        parseInt(firstNumber) - parseInt(secondNumber)
      }`
    )
  : operator === '*'
  ? console.log(
      `${firstNumber} * ${secondNumber} = ${
        parseInt(firstNumber) * parseInt(secondNumber)
      }`
    )
  : operator === '/' ??
    console.log(
      `${firstNumber} / ${secondNumber} = ${
        parseInt(firstNumber) / parseInt(secondNumber)
      }`
    );
