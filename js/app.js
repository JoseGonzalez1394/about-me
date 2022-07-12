'use strict';

let siteVisitor = prompt('Hello There! Whats your name');

alert (`May the Force be with you ${siteVisitor}! Let's learn more about me, yea?`);

let questionOne = prompt ('Yes or No...Do I have a daughter?').toLowerCase();

if(questionOne === 'y' || questionOne === 'yes'){
// console.log('I am a girl dad indeed!')
// console.log('Nope, I sure do!')
  alert('I am a girl dad indeed!');
} else if(questionOne === 'n' || questionOne === 'no'){
  alert ('Nope, I sure do!');
} else{
  alert('Answer yes or no');
}

let questionTwo = prompt ('Yes or No...Did I serve in the Army?').toUpperCase();

if(questionTwo === 'Y' || questionTwo === 'YES'){
// console.log('HOOAH!')
// console.log('I am a veteran indeed')
  alert('HOOAH!');
} else if(questionTwo === 'N' || questionTwo === 'NO'){
  alert ('I am a veteran indeed');
} else{
  alert('Answer yes or no');
}

let questionThree = prompt ('Yes or No... Am I over 6 ft tall?').toLowerCase();

if(questionThree === 'y' || questionThree === 'yes'){
// console.log('Yup! I am a tall latino...quite the anamoly')
// console.log('I am a tall latino...shocking I know')
  alert('Yup! I am a tall latino...quite the anamoly');
} else if(questionThree === 'n' || questionThree === 'no'){
  alert ('I am a tall latino...shocking I know');
} else{
  alert('Answer yes or no');
}

let questionFour = prompt ('Yes or No...Do I have tattos?').toUpperCase();

if(questionFour === 'Y' || questionFour === 'YES'){
// console.log('YES! It can be quite the addiction')
// console.log('Sadly, I spend too much money on them')
  alert('YES! It can be quite the addiction');
} else if(questionFour === 'N' || questionFour === 'NO'){
  alert ('Sadly, I spend too much money on them');
} else{
  alert('Answer yes or no');
}

let questionFive = prompt ('Yes or No...Am I up to date on the anime One Piece?').toLowerCase();

if(questionFive === 'y' || questionFive === 'yes'){
// console.log('NOPE...way too many epsidoes, I have the attention span of a goldfish')
// console.log('OF COURSE! theres over a thousand epsidoes, Im in a coding boot camp...no time')
  alert('NOPE...way too many epsidoes, I have the attention span of a goldfish');
} else if(questionFive === 'n' || questionFive === 'no'){
  alert ('OF COURSE! theres over a thousand epsidoes, Im in a coding boot camp...no time');
} else{
  alert('Answer yes or no');
}
