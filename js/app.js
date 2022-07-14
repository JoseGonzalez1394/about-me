'use strict';

let siteVisitor = prompt('Hello There! Whats your name');

alert(`May the Force be with you ${siteVisitor}! Let's learn more about me, yea?`);

let score = 0;
let questionOne = prompt('Yes or No...Do I have a daughter?').toLowerCase();

if (questionOne === 'y' || questionOne === 'yes') {
  // console.log('I am a girl dad indeed!')
  // console.log('Nope, I sure do!')
  score++;
  alert('I am a girl dad indeed!');
} else if (questionOne === 'n' || questionOne === 'no') {
  alert('Nope, I sure do!');
} else {
  alert('Answer yes or no');
}

let questionTwo = prompt('Yes or No...Did I serve in the Army?').toUpperCase();

if (questionTwo === 'Y' || questionTwo === 'YES') {
  // console.log('HOOAH!')
  // console.log('I am a veteran indeed')
  score++;
  alert('HOOAH!');
} else if (questionTwo === 'N' || questionTwo === 'NO') {
  alert('I am a veteran indeed');
} else {
  alert('Answer yes or no');
}

let questionThree = prompt('Yes or No... Am I over 6 ft tall?').toLowerCase();

if (questionThree === 'y' || questionThree === 'yes') {
  // console.log('Yup! I am a tall latino...quite the anamoly')
  // console.log('I am a tall latino...shocking I know')
  score++;
  alert('Yup! I am a tall latino...quite the anomaly');
  score++;
} else if (questionThree === 'n' || questionThree === 'no') {
  alert('I am a tall latino...shocking I know');
} else {
  alert('Answer yes or no');
}

let questionFour = prompt('Yes or No...Do I have tattos?').toUpperCase();

if (questionFour === 'Y' || questionFour === 'YES') {
  // console.log('YES! It can be quite the addiction')
  // console.log('Sadly, I spend too much money on them')
  score++;
  alert('YES! It can be quite the addiction');
} else if (questionFour === 'N' || questionFour === 'NO') {
  alert('Sadly, I spend too much money on them');
} else {
  alert('Answer yes or no');
}

let questionFive = prompt('Yes or No...Am I up to date on the anime One Piece?').toLowerCase();

if (questionFive === 'y' || questionFive === 'yes') {
  // console.log('NOPE...way too many epsidoes, I have the attention span of a goldfish')
  // console.log('OF COURSE! theres over a thousand epsidoes, Im in a coding boot camp...no time')
  score++;
  alert('NOPE...way too many epsidoes, I have the attention span of a goldfish');
} else if (questionFive === 'n' || questionFive === 'no') {
  alert(`OF COURSE NOT ${siteVisitor}! There's over a thousand episodes, Im in a coding boot camp...no time`);
} else {
  alert('Answer yes or no');
}

let questionSix = prompt(`Guess what number I'm thinking`);
let answerSix = 24;
let attempts = 5;

for (let i = 0; i < attempts; i++) {
  while (questionSix < 1 || questionSix > 50) {
    questionSix = prompt(`Guess what number I'm thinking`);
    
    alert(`That's right ${siteVisitor}, I have another baby girl due 24 AUG!`);
    score++;
    break;
  } else if (questionSix > answerSix) {
    alert("too high");
  } else if (questionSix < answerSix) {
    alert("too low");
  } else if (i <= 3) {
  };
  alert(`Sorry ${siteVisitor}, almost had it, the number was ${answerSix}`);
}
let answerSeven = ['Berserk', 'My Hero Academia'];

for (let i = 0; i < answerSeven.length; i++) {
  let questionSeven = prompt(`Guess what manga I'm reading?`);
  for (let i = 0; i < answerSeven.length; i++) {
    if (answerSeven[i] == QuestionSeven) {
      alert(`That's one of them! I like manga better than books`);
      score++;
      i <= 5;
      break;
    } else if (answerSeven[i] != questionSeven); {
      alert(`Nope, it's not that one, try again ${siteVisitor}`);
    } else (questionSeven <= 5);
    alert("The manga I'm reading are Berserk and My Hero Academia");
  }
}

alert('score = ' + score + '/7');
