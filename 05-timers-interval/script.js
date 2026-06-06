let tracker = document.querySelector("#tracker");
let count = 0;
let downloadCount = document.querySelector("h3");
const reult = document.querySelector("#result");

function analyseCard() {
  let analyser = setInterval(function () {
    if (count <= 99) {
      result.style.display = "none";
      count++;
      tracker.style.width = `${count}%`;
      downloadCount.textContent = `${count}%`;
    } else {
      card.style.display = "none";
      result.style.display = "block";
    }
  }, 10);
}

// queation and options array of objects
const questions = [
  {
    question: "How often do you shower with hot water?",
    option1: "Twice a day",
    option2: "Daily",
    option3: "Sometimes",
    option4: "Never",
  },

  {
    question: "What time do you usually wake up on weekends?",
    option1: "Before 7 AM",
    option2: "8-9 AM",
    option3: "10-11 AM",
    option4: "After Noon",
  },

  {
    question: "Do you have a best friend you tell everything to?",
    option1: "Absolutely",
    option2: "Mostly",
    option3: "A little",
    option4: "No",
  },

  {
    question: "How much time do you spend scrolling social media?",
    option1: "5+ Hours",
    option2: "3-5 Hours",
    option3: "1-2 Hours",
    option4: "Less than 1 Hour",
  },

  {
    question: "Are you jealous when your friend succeeds?",
    option1: "Very jealous",
    option2: "Sometimes",
    option3: "Rarely",
    option4: "Never",
  },

  {
    question: "How often do you work out?",
    option1: "Never",
    option2: "Sometimes",
    option3: "3-4 Times a Week",
    option4: "Daily",
  },

  {
    question: "Do you treat your parents respectfully?",
    option1: "Always",
    option2: "Most of the time",
    option3: "Sometimes",
    option4: "Rarely",
  },

  {
    question: "How long does it take you to choose a profile picture?",
    option1: "30+ Minutes",
    option2: "10 Minutes",
    option3: "2 Minutes",
    option4: "I don't care",
  },

  {
    question: "Have you ever rehearsed an argument in the shower?",
    option1: "Many times",
    option2: "Sometimes",
    option3: "Once",
    option4: "Never",
  },
];

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

// creatign function to switch the question card
let i = 0;
function switchQue() {
  if (i === questions.length - 1) {
    save.textContent = "Submit";
  }
  if (i === questions.length) {
    card.classList.remove("disabled");
    queCard.style.display = "none";
    analyseCard();
    return;
  }

  // changing content of the card when funciton call
  que.textContent = `${i + 2}. ${questions[i].question} `;
  op1.textContent = questions[i].option1;
  op2.textContent = questions[i].option2;
  op3.textContent = questions[i].option3;
  op4.textContent = questions[i].option4;

  i++;
}

// Timer

const timer = document.querySelector("#timer");

function timerFunct() {
  let j = 5;
  clearInterval(intervalId)
 
const  intervalId = setInterval(() => {
    timer.textContent = j;

    if (j === 0) {
      clearInterval(intervalId)
      switchQue();
      timerFunct();
      return;
    }
    j--;
  }, 1000);
}

// timerFunct()
save.addEventListener("click", () => {
  switchQue();
  timerFunct();
});
