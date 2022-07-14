'use strict';

let siteVisitor = prompt('Hello There! Whats your name');

alert(`May the Force be with you ${siteVisitor}! Let's learn more about me, yea?`);

let questionOne = prompt('Yes or No...Do I have a daughter?').toLowerCase();

if (questionOne === 'y' || questionOne === 'yes') {
  // console.log('I am a girl dad indeed!')
  // console.log('Nope, I sure do!')
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
  alert('Yup! I am a tall latino...quite the anamoly');
} else if (questionThree === 'n' || questionThree === 'no') {
  alert('I am a tall latino...shocking I know');
} else {
  alert('Answer yes or no');
}

let questionFour = prompt('Yes or No...Do I have tattos?').toUpperCase();

if (questionFour === 'Y' || questionFour === 'YES') {
  // console.log('YES! It can be quite the addiction')
  // console.log('Sadly, I spend too much money on them')
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
  alert('NOPE...way too many epsidoes, I have the attention span of a goldfish');
} else if (questionFive === 'n' || questionFive === 'no') {
  alert('OF COURSE! theres over a thousand epsidoes, Im in a coding boot camp...no time');
} else {
  alert('Answer yes or no');
}

const answerSix = 24;
for (let i = 0; i < 4; i++) {
  let questionSix = prompt(`Guess what number I'm thinking from 1 to 30`);
  if (questionSix === answerSix) {
    alert(`That's right ${siteVisitor}, I have another baby girl due 24 AUG!`);
    break;
  } else if (questionSix > answerSix) {
    alert("too high");
  } else if (questionSix < answerSix) {
    alert("too low");
  } if (i >= 3) {
    alert(`Sorry ${siteVisitor}, almost had it, the number was ${answerSix}}`);
  }

  const videogames = ['PC', 'Xbox', 'Switch'];
  for (let i = 0; i < 6; i++) {
    let questionSeven = prompt(`Guess what gaming consoles I play on?`);
  for (let j = 0; j < videogames.length; j++){
    if (videogames[] =)

      if (i >= 5) {
        alert(`So close ${siteVisitor}, almost had it, I play on PC, Switch, and Xbox ${answerSeven}}`);
      }
      // if (questionSix === 24) {
      //   alert('NOPE...way too many epsidoes, I have the attention span of a goldfish');
      // } else if (questionSix === 'n' || questionSix === 'no') {
      //   alert('OF COURSE! theres over a thousand epsidoes, Im in a coding boot camp...no time');
      // } else {
      //   alert('Answer yes or no');
      // }
      // const prompt =

      //   function 
      // for (let i = questionSix; i =  ; i++) {

    }
// // console.log('NOPE...way too many epsidoes, I have the attention span of a goldfish')
// // console.log('OF COURSE! theres over a thousand epsidoes, Im in a coding boot camp...no time')

// 'use strict';

// let nums = [11,20,36,44,59];

// console.log(nums);

// // great way to see the indexes
// console.table(nums);

// let mixedArr = [4, 'hello', false, [10, 20, 30]];

// // console.table(mixedArr);

// // reference elements by using the bracket notation - give it the index >> array[index]
// console.log(nums[3]);
// console.log(mixedArr[3][1]);

// //                 0          1         2
// let students = ['Adrian', 'Brandon', 'Brian'];

// // remove from the end of the array
// let brian = students.pop();
// console.log(brian);
// console.log(students);

// // push adds to the end of the array
// students.push('Colter', 'Stephen');
// console.log(students);

// // assigning a value to an array index
// students[10] = 'Alan';
// students[8] = 'Jose';

// console.log(students);

// // FOR Loops - GREAT for doing something a certain number of times

// // anatomy of a for loop:
// // for(starting value; conditional; increment){
// //    do something for certain number of times
// // }
// //             length = 5
// let nums = [2, 4, 6, 8, 10];

// for(let i = 0; i < nums.length; i++){
//   console.log(`The sum of ${nums[i]} plus 1 is ${nums[i] + 1}`);  
// }

// let students = ['Herman', 'Daniel', 'Dan A', 'Rob B', 'Kevin', 'Adrian', 'Alan', 'Stephen C', 'Angela', 'Keelen', 'Jose', 'Xavier', 'Tyler', 'Liliane', 'Stephen M', 'Timothee', 'Brandon', 'Matthew', 'Luis', 'Robert S', 'Jun', 'Sue', 'Brian', 'Tim', 'Colter'];

// for(let i = 0; i < students.length; i++){
//   if(students[i] === 'Xavier'){
//     console.log('Hey Xavier this is your special greeting!');
//   } else {
//     console.log(`Hey ${students[i]} this is your regular ole greeting!`);
//   }
// }

// // ********* WHILE LOOPS! ************
// // Do something until a condition is no longer true
// // BEWARE OF INFINITE LOOPS!

// // anatomy of a while loop

// // while(condition){
// //   do something as long as condition is true
// // }

// let myNum = 4;

// let userGuess = prompt('Guess what number I\'m thinking of');

// while(userGuess !== myNum){
//   userGuess = prompt('Guess again');
// }


// // This is a function that will return a random student from my array. Dont worry about this yet!
// function getRandomStudent(){
//   let randomIdx = Math.floor(Math.random() * students.length);
//   let randomStudent = students[randomIdx];
//   return randomStudent;
// }


// let clueGuesses = 25;
// let suspect = 'Jun';
// let foundSuspect = false;

// //1st - 25            !false = true
// while(clueGuesses && !foundSuspect){
//   let consoleGuess = getRandomStudent();
//   console.log(`It was ${consoleGuess}, in Remo with the candlestick!  Guesses: ${clueGuesses}`);
//   clueGuesses--;
//   if(consoleGuess === suspect){
//     foundSuspect = true;
//   }
// }