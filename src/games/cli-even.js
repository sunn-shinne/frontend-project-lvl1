import { getName, getRandomInt, askQuestion } from '../index.js';

const evenGame = () => {
  const name = getName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let questionNumber = 0;
  while (questionNumber < 3) {
    const number = getRandomInt();
    const answer = (number % 2 === 0) ? 'yes' : 'no';
    const isAnswerCorrect = askQuestion(number, answer, name);
    if (!isAnswerCorrect) {
      break;
    }
    questionNumber += 1;
  }

  if (questionNumber === 3) console.log(`Congratulations, ${name}!`);
};

export default evenGame;
