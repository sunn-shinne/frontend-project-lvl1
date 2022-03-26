import { getName, getRandomInt, askQuestion } from '../index.js';

const calcGame = () => {
  const name = getName();
  console.log('What is the result of the expression?');

  let questionNumber = 0;
  while (questionNumber < 3) {
    const firstNum = getRandomInt(30);
    const secondNum = getRandomInt(30);

    const operationsList = ['+', '-', '*'];
    const operation = operationsList[getRandomInt(3)];

    let answer;
    switch (operation) {
      case '+':
        answer = firstNum + secondNum;
        break;

      case '-':
        answer = firstNum - secondNum;
        break;

      case '*':
        answer = firstNum * secondNum;
        break;

      default:
        answer = firstNum + secondNum;
    }

    const isAnswerCorrect = askQuestion(`${firstNum} ${operation} ${secondNum}`, answer, name);
    if (!isAnswerCorrect) {
      break;
    }

    questionNumber += 1;
  }

  if (questionNumber === 3) console.log(`Congratulations, ${name}!`);
};

export default calcGame;
