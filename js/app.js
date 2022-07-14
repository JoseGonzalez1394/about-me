'use strict';


let siteVisitor = prompt('Hello There! Whats your name');

alert(`May the Force be with you ${siteVisitor}! Let's learn more about me, yea?`);
// console.log(`User's name is ${siteVistor}`)

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
  // console.log('I did serve in the Army for 9 years')
  score++;
  alert('HOOAH!');
} else if (questionTwo === 'N' || questionTwo === 'NO') {
  alert('I did serve in the Army for 9 years');
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

let questionSix = prompt(`Guess what number I'm thinking? Try Guessing between 1 - 30`);
let answerSix = 24;
let attemptsFour = 5;

for (let i = 0; i < attemptsFour; i++) {
  while (questionSix < 1 && questionSix > 30) {
    // console.log('Sorry ${siteVisitor}, almost had it, the number was ${answerSix}')
    // console.log('That's right ${siteVisitor}, I have another baby girl due 24 AUG!')
    alert("Try again!");
  }
  if (questionSix === answerSix) {
    alert(`That's right ${siteVisitor}, I have another baby girl due 24 AUG!`);
    score++;
    break;
  } if (questionSix > answerSix) {
    alert("too high");
    break;
  } else if (questionSix < answerSix); {
    alert("too low");
  } if (i === 4) {
    alert(`Sorry ${siteVisitor}, almost had it, the number was ${answerSix}`);
  }
}

let answerSeven = ['Berserk', 'My Hero Academia'];
// let attemptsSix = 6;
let questionSeven = prompt(`Guess what manga I'm reading?`);

for (let i = 0; i < answerSeven.length; i++) {
  while (answerSeven[i] === !questionSeven) {
    // console.log('The manga I'm reading are: ${answerSeven}')
    // console.log('That's one of them! I like manga better than books')
    alert(`Nope, it's not that one, try again ${siteVisitor}`);
    score++;
    break;
  } if (i <= 5); {
    alert(`That's one of them! I like manga better than books`);
    break;
//   } if (i === 6); {
//     alert(`The manga I'm reading are: ${answerSeven}`);
//   }
// }

// alert('score = ' + score + '/7');