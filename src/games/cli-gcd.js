import { getName, getRandomInt, askQuestion } from '../index.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const gcdGame = () => {
  const name = getName();
  console.log('Find the greatest common divisor of given numbers.');

  let questionNumber = 0;
  while (questionNumber < 3) {
    const firstNum = getRandomInt(100);
    const secondNum = getRandomInt(100);

    const answer = gcd(firstNum, secondNum);
    const isAnswerCorrect = askQuestion(`${firstNum} ${secondNum}`, answer, name);

    if (!isAnswerCorrect) {
      break;
    }
    questionNumber += 1;
  }

  if (questionNumber >= 3) console.log(`Congratulations, ${name}!`);
};

export default gcdGame;
