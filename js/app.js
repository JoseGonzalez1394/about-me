'use strict';

let score = 0;

let siteVisitor = prompt('Hello There! Whats your name');

alert(`May the Force be with you ${siteVisitor}! Let's learn more about me, yea?`);


function one() {
  let questionOne = prompt('Yes or No...Do I have a daughter?').toLowerCase();
  if (questionOne === 'y' || questionOne === 'yes') {
    score++;
    alert('I am a girl dad indeed!');
  } else if (questionOne === 'n' || questionOne === 'no') {
    alert('Nope, I sure do!');
  } else {
    alert('Answer yes or no');
  }
}

one();

function two() {
  let questionTwo = prompt('Yes or No...Did I serve in the Army?').toUpperCase();

  if (questionTwo === 'Y' || questionTwo === 'YES') {

    score++;
    alert('HOOAH!');
  } else if (questionTwo === 'N' || questionTwo === 'NO') {
    alert('I did serve in the Army for 9 years');
  } else {
    alert('Answer yes or no');
  }
}

two();

function three() {
  let questionThree = prompt('Yes or No... Am I over 6 ft tall?').toLowerCase();

  if (questionThree === 'y' || questionThree === 'yes') {

    score++;
    alert('Yup! I am a tall latino...quite the anomaly');
    score++;
  } else if (questionThree === 'n' || questionThree === 'no') {
    alert('I am a tall latino...shocking I know');
  } else {
    alert('Answer yes or no');
  }
}

three();

function four() {
  let questionFour = prompt('Yes or No...Do I have tattoos?').toUpperCase();

  if (questionFour === 'Y' || questionFour === 'YES') {

    score++;
    alert('YES! It can be quite the addiction');
  } else if (questionFour === 'N' || questionFour === 'NO') {
    alert('Sadly, I spend too much money on them');
  } else {
    alert('Answer yes or no');
  }
}

four();

function five() {
  let questionFive = prompt('Yes or No...Am I up to date on the anime One Piece?').toLowerCase();

  if (questionFive === 'y' || questionFive === 'yes') {

    score++;
    alert('NOPE...way too many epsidoes, I have the attention span of a goldfish');
  } else if (questionFive === 'n' || questionFive === 'no') {
    alert(`OF COURSE NOT ${siteVisitor}! There's over a thousand episodes, Im in a coding boot camp...no time`);
  } else {
    alert('Answer yes or no');
  }

  alert(`${siteVisitor} thanks for playing!`);
}

five();

function six() {
  let answerSix = 24;

  for (let i = 0; i < 4; i++) {
    let questionSix = +prompt('Guess what number I\'m thinking? Try Guessing between 1 - 30');
    if (questionSix === answerSix) {
      alert(`That's right ${siteVisitor}, I have another baby girl due 24 AUG!`);
      score++;
      break;
    } else if (questionSix > answerSix) {
      alert('too high');
    } else if (questionSix < answerSix) {
      alert('too low');
    } else if (i === 4) {
      alert(`Sorry ${siteVisitor}, almost had it, the number was ${answerSix}`);
    }
  }
}

six();

function seven() {
  let answerSeven = ['berserk', 'my hero academia'];

  let correct = false;

  for (let i = 0; i < 6; i++) {
    let questionSeven = prompt('Guess what manga I\'m reading?').toLowerCase();
    for (let j = 0; j < answerSeven.length; j++) {
      if (questionSeven === answerSeven[i]) {
        alert('That\'s one of them! I like mangas better than books');
        score++;
        i = 6;
        correct = true;
        break;
      }
    }
  }
  if (correct === false) {
    alert(`Sorry, ${siteVisitor},nice try`);
  } else {
    alert(`Good Job ${siteVisitor}! These are the manga I'm reading ${answerSeven}`);
  }

  alert(`${siteVisitor}, your score so far is ${score} out of 7`);

}

seven();
