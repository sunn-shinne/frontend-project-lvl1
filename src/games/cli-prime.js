import { getName, getRandomInt, askQuestion } from '../index.js';

const isPrime = (number) => {
  if (number <= 2) {
    return true;
  }
  for (let i = 3; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  const name = getName();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

  let questionNumber = 0;
  while (questionNumber < 3) {
    const number = getRandomInt() + 2;
    const answer = (isPrime(number)) ? 'yes' : 'no';
    const isAnswerCorrect = askQuestion(number, answer, name);
    if (!isAnswerCorrect) {
      break;
    }
    questionNumber += 1;
  }

  if (questionNumber === 3) console.log(`Congratulations, ${name}!`);
};

export default primeGame;
