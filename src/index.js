export const roundsCount = 3;

export const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export const getRandomNumber = () => Math.round(Math.random() * 100);

export const getRandomOperator = () => {
  const randomNumber = (Math.round(Math.random() * 10) % 3) + 1;
  switch (randomNumber) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return null;
  }
};

export const getOperationResult = (firstOperand, operator, secondOperand) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return null;
  }
};

export const getGcd = (firstNumber, secondNumber) => {
  const maxNumber = Math.max(firstNumber, secondNumber);
  for (let i = maxNumber; i > 1; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      return i;
    }
  }
  return 1;
};
