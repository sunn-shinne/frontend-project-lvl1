import { getName, getRandomInt, askQuestion } from '../index.js';

const createProgression = () => {
  const d = getRandomInt(10) + 1;
  const startValue = getRandomInt(30);
  const arr = [startValue];

  for (let i = 0; i < 10; i += 1) {
    arr.push(arr[arr.length - 1] + d);
  }
  return arr;
};

const progressionToString = (arr, hiddenId) => {
  const res = arr
    .map((item, index) => ((index === hiddenId) ? '..' : item))
    .join(' ');
  return res;
};

const progressionGame = () => {
  const name = getName();

  let questionNumber = 0;
  while (questionNumber < 3) {
    const progression = createProgression();
    const hiddenElementId = getRandomInt(10);
    const answer = progression[hiddenElementId];
    const strProgression = progressionToString(progression, hiddenElementId);

    const isAnswerCorrect = askQuestion(strProgression, answer, name);
    if (!isAnswerCorrect) {
      break;
    }
    questionNumber += 1;
  }

  if (questionNumber === 3) console.log(`Congratulations, ${name}!`);
};

export default progressionGame;
