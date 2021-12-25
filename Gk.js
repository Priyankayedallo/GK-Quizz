var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name?');
console.log('Hi',userName);

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Lets check your General Knowledge");

const queBank = [
  {
    question: `
  Does crypto currency got banned in India?\n`,
    answer: "no"
  },
  {
    question: `
   Which among the following is the national sport of India?
   a. hockey
   b. cricket
   c. badminton
   d. table tennis\n`,
    answer: "a"
  },
  {
    question: `
  Which city is known as "Pink City"?
  a: Nagpur
  b: Manali
  c: bhopal
  d: jaipur\n`,
    answer: "d"
  },
  {
    question: `
  which is the second capital of Maharatshta?
  a: Nashik
  b: Amravati
  c: Nagpur
  d. Chandrapur\n`,
    answer: "c"
  }
];

let questionIndex = 0;

function question() {
  rl.question(queBank[questionIndex].question, (answer) => {
    console.log(`You answered: ${answer}`);

    if (answer.toLowerCase() == queBank[questionIndex].answer.toLowerCase()) {
      console.log("right answer");
      questionIndex++;
      serve();
    } else {
      console.log("wrong answer");
      console.log("try again");
      question();
    }
  });
}

function serve() {
  if (isQuestionBankExhausted()) {
    console.log("Thanks for playing....");
    rl.close();
  } 
  else {
    rl.question("What do you want to do? \n Press e to exit, any other key to continue....  ", (choice) => {
      console.log(`You selected ${choice}`);

      if (choice.toLowerCase() !== "e") {
        question();
      }
       else {
        console.log("Thanks for playing....");
        rl.close();
      }
    }
    );
  }
}

/**
 * checks array length with index and exits game
 */
function isQuestionBankExhausted() {
  if (queBank.length == questionIndex) {
    return true;
  }
}
serve();

