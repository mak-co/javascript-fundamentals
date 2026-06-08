const questions = [
  {
    question: "Which keyword is used to declare a constant?",
    options: ["var", "let", "const", "constant"],
    answer: 2,
  },
  {
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
    question: "Which event occurs when a button is clicked?",
    options: ["submit", "hover", "click", "load"],
    answer: 2,
  },
  {
    question: "What is the output type of prompt()?",
    options: ["Number", "String", "Boolean", "Object"],
    answer: 1,
  },
  {
    question: "Which operator means strict equality?",
    options: ["==", "=", "===", "!="],
    answer: 2,
  },
  {
    question: "Which array method adds an item at the end?",
    options: ["push()", "pop()", "shift()", "slice()"],
    answer: 0,
  },
  {
    question: "Which array method removes the last item?",
    options: ["push()", "shift()", "splice()", "pop()"],
    answer: 3,
  },
  {
    question: "How do you write a comment in JS?",
    options: ["// comment", "<!-- comment -->", "# comment", "** comment **"],
    answer: 0,
  },
  {
    question: "Which keyword declares a block-scoped variable?",
    options: ["var", "let", "int", "define"],
    answer: 1,
  },
  {
    question: "Which method converts JSON string into JS object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.object()",
    ],
    answer: 1,
  },
  {
    question: "Which method converts JS object into JSON string?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.text()",
    ],
    answer: 1,
  },
  {
    question: "What does addEventListener() do?",
    options: [
      "Creates HTML",
      "Adds CSS",
      "Listens for events",
      "Deletes elements",
    ],
    answer: 2,
  },
  {
    question: "Which method creates a new element?",
    options: [
      "appendChild()",
      "createElement()",
      "newElement()",
      "insertElement()",
    ],
    answer: 1,
  },
  {
    question: "Which method removes an element?",
    options: ["deleteElement()", "remove()", "destroy()", "erase()"],
    answer: 1,
  },
  {
    question: "Which loop runs at least once?",
    options: ["for", "while", "do...while", "foreach"],
    answer: 2,
  },
  {
    question: "Which function delays execution once?",
    options: ["setTimeout()", "setInterval()", "clearTimeout()", "delay()"],
    answer: 0,
  },
  {
    question: "Which function repeats execution?",
    options: ["setInterval()", "setTimeout()", "repeat()", "loop()"],
    answer: 0,
  },
  {
    question: "What does preventDefault() do?",
    options: [
      "Stops page refresh/default action",
      "Deletes form",
      "Reloads page",
      "Stops JavaScript",
    ],
    answer: 0,
  },
  {
    question: "Which method checks if a regex matches a string?",
    options: [".match()", ".check()", ".test()", ".verify()"],
    answer: 2,
  },
];

let tracker = document.querySelector("#tracker");
let count = 0;
let downloadCount = document.querySelector("h3");
const reult = document.querySelector("#result");

// -----------analysing card---------------
function analyseCard() {
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
}

// data for mcq card ----------------
const card = document.querySelector("#card");
const queCard = document.querySelector("#queCard");

let que = document.querySelector(".que");
let op1 = document.querySelector("#op1");
let op2 = document.querySelector("#op2");
let op3 = document.querySelector("#op3");
let op4 = document.querySelector("#op4");

// radio input
let r1 = document.querySelector("#r1");
let r2 = document.querySelector("#r2");
let r3 = document.querySelector("#r3");
let r4 = document.querySelector("#r4");

const save = document.querySelector("#save");

// switching quesiton when click ----------------

// creatign function to switch the question card
let i = 0;
function switchQue() {
  timerFunct();
  emptInput();
  if (i === questions.length - 1) {
    save.textContent = "Submit";
  }
  if (i === questions.length) {
    queCard.style.display = "none";
    analyseCard();
    return;
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

const timer = document.querySelector("#timer");

function timerFunct() {
  let j = 5;
  timer.textContent = j;

  // clearing the already running setInterval to avoid more than 1 timer to  run simultaneously
  clearInterval(intervalId);

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
      console.log(j);

      clearInterval(intervalId);
      timerFunct();
      switchQue();

      return;
    }

    j--;
  }, 1000);
}

// -------------heading-----------

let heading = document.querySelector(".heading");
let start = document.querySelector("#start");

start.addEventListener("click", () => {
  timerFunct();
  queCard.style.display = "block";
  start.style.display = "none";
  heading.style.display = "none";
  switchQue();
});

save.addEventListener("click", () => {
  const answerSaved = answers();
  if (!answerSaved) {
    alert("please select");
  } else {
    switchQue();
    timerFunct();
    answers();
  }
});

// pushing answers in an array when calling answer() function  -------------------------------------

// creatign an array to save the answers -
const userAnswers = [];

// creating a funciton for the process to use it when clicking save answers ---
function answers() {
  //Firstly saving the selected option in a varible
  let selectedRadio = document.querySelector('input[name="answer"]:checked');

  //Secondly gettign the selected options value-
  const selectedOptionIndex = Number(selectedRadio.value);

  //now if option is selected(true) then pushing its value (0 or 1 or 2 or 3) in the array as userAnswers
  if (selectedRadio) {
    userAnswers.push(selectedOptionIndex);

    // calling the empty option fucnction

    return true; //to use it outside the funciton
  } else {
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
let score = 0;

function testing() {
  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].answer) {
      score++;
    }
  }
}

console.log(score);
