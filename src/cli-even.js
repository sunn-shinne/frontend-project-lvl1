import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');

const getRandomInt = (max = 100) => Math.floor(Math.random() * max);

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let questionNumber = 0;
  while (questionNumber < 3) {
    const number = getRandomInt();
    const answer = (number % 2 === 0) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    console.log('Correct!');
    questionNumber += 1;
  }

  if (questionNumber === 3) console.log(`Congratulations, ${name}!`);
};

export default evenGame;
