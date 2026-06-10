const questions = [
  {
    //1
    question: "Which keyword is used to declare a constant?",
    options: ["var", "let", "const", "constant"],
    answer: 2,
  },
  {
    //2
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Document Oriented Model",
      "Desktop Object Model",
    ],
    answer: 0,
  },
  {
    //3
    question: "Which method selects an element by id?",
    options: [
      "querySelector()",
      "getElementById()",
      "getElementsByClassName()",
      "selectById()",
    ],
    answer: 1,
  },
  {
    //4
    question: "Which event occurs when a button is clicked?",
    options: ["submit", "hover", "click", "load"],
    answer: 2,
  },
  {
    //5
    question: "What is the output type of prompt()?",
    options: ["Number", "String", "Boolean", "Object"],
    answer: 1,
  },
  {//6
    question: "Which operator means strict equality?",
    options: ["==", "=", "===", "!="],
    answer: 2,
  },
  {//7
    question: "Which array method adds an item at the end?",
    options: ["push()", "pop()", "shift()", "slice()"],
    answer: 0,
  },
  {//8
    question: "Which array method removes the last item?",
    options: ["push()", "shift()", "splice()", "pop()"],
    answer: 3,
  },
  {//9
    question: "How do you write a comment in JS?",
    options: ["// comment", "<!-- comment -->", "# comment", "** comment **"],
    answer: 0,
  },
  {//10
    question: "Which keyword declares a block-scoped variable?",
    options: ["var", "let", "int", "define"],
    answer: 1,
  },
  
];

// Grabing elemetns--------->
let tracker = document.querySelector("#tracker");
let downloadCount = document.querySelector("h3");
const result = document.querySelector("#result");


// -----------analysing card--------------->
let count = 0;
function analyseCard() {
  // Clearing the interval to avoid multiple setinterval run at a time 
  clearInterval(intervalId);

  // setting up the interval for the loading bar
  setInterval(function () {
    if (count <= 99) {
      result.style.display = "none";
      card.style.display = "block";
      count++;
      tracker.style.width = `${count}%`;
      downloadCount.textContent = `${count}%`;
    } else {
      card.style.display = "none";
      result.style.display = "block";
    }
  }, 10);

  // testing funciton to check the anwers
  testing();
  return;
}

// Grabbing data for mcq card -------->
const card = document.querySelector("#card");
const queCard = document.querySelector("#queCard");

let que = document.querySelector(".que");
let op1 = document.querySelector("#op1");
let op2 = document.querySelector("#op2");
let op3 = document.querySelector("#op3");
let op4 = document.querySelector("#op4");

// grabbing the radio input
let r1 = document.querySelector("#r1");
let r2 = document.querySelector("#r2");
let r3 = document.querySelector("#r3");
let r4 = document.querySelector("#r4");

// grabbing the save buttons
const save = document.querySelector("#save");


// creatign function to switch the question card
let i = 0;
function switchQue() {
  queCard.style.display = "block";
  timerFunct();  //running timer when qustin changes
  emptInput(); //radio input get empty
  if (i === questions.length - 1) {  // changing save buttons text to submit when reaching last quesion
    save.textContent = "Submit";
  }
  if (i === questions.length) {
    queCard.style.display = "none"; //after clicking on the submit button question disappears
    analyseCard(); //pushing answers or the value of the selected radio  the answer array 
    return; //why used return ?
  }

  // changing content of the card when funciton call
  que.textContent = `${i + 1}. ${questions[i].question} `;
  op1.textContent = questions[i].options[0];
  op2.textContent = questions[i].options[1];
  op3.textContent = questions[i].options[2];
  op4.textContent = questions[i].options[3];

  i++;
}

//---------Timer------

// declaring intervalId outside the function
let intervalId;

// grabbing timer 
const timer = document.querySelector("#timer");

function timerFunct() {
  let j = 5;   //timer starts from - 5
  timer.textContent = j; //setting timers text content to 5

  // clearing the already running setInterval to avoid more than 1 timer to  run simultaneously
  //que - instead of clearing the interval why dont we clear the funciton itself ?
  clearInterval(intervalId);

  //setting interval to run after every 1 second and saving it inside a varaible to use it further or to clearInterval
  intervalId = setInterval(() => {
    timer.textContent = j - 1;

    // changing color of 0 to red
    if (j - 1 === 0) {
      timer.style.color = "red";
      timer.style.borderColor = "red";
    } else {
      timer.style.color = "white";
      timer.style.borderColor = "cyan";
    }

    // chagning quesiton when timer passes 0 and rerunning the timerfunciton and which will cause previous setinterval to rerun therefor used clearinterval to clear the previous runnign timer
    if (j === 0) {
      answers();
      timerFunct();
      switchQue();
      return;
    }
    j--;
   
  }, 1000);
}

// -------------heading-----------

//grabing heading and start button elem ---
let heading = document.querySelector(".heading");
let start = document.querySelector("#start");


// start button features - 
start.addEventListener("click", () => {
  timerFunct();
  switchQue();
  start.style.display = "none";
  heading.style.display = "none";
});

// save button features
save.addEventListener("click", () => {
  if (!document.querySelector('input[name="answer"]:checked')) {
    alert("select an option");
    return
  }
  
  answers();
  switchQue();
  timerFunct();
});



// creating answers funciton to push answers in an array when calling answer() function  ------------------------>

// creatign an array to save the answers -
const userAnswers = [];

// creating a funciton for the process to use it when clicking save answers ---
function answers() {
  //Firstly saving the selected option in a varible
  let selectedRadio = document.querySelector('input[name="answer"]:checked'); //que - why const worked not let

  //now if option is selected(true) then pushing its value (0 or 1 or 2 or 3) in the array as userAnswers
  if (selectedRadio) {
    //Secondly gettign the selected options value-
    const selectedOptionIndex = Number(selectedRadio.value);
    userAnswers.push(selectedOptionIndex);
    
    // calling the empty option fucnction
    return true; //to use it outside the funciton
  } else {
    //pushin 5 for empty radio when timer passes 0 only 
    userAnswers.push(Number(5));
    return false;
    //returning this to use selectedRaio outside the funciton in save buttons eventlistener
  }
}

// emptying the imput funciton ----
function emptInput() {
  r1.checked = false;
  r2.checked = false;
  r3.checked = false;
  r4.checked = false;
  return true;
}

// testing the answers ---

function testing() {
  let score = 0; //why storing inside the funciton?
  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].answer) {
      score++;
    }
  }

  // changing the innerhtml of the result 
  result.innerHTML = `<h1>Your Score is = ${score}/${questions.length}</h1>`;
  return;
} 
