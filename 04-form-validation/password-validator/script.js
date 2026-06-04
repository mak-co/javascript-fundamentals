const form = document.querySelector("#signup-form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submit = document.querySelector("button");



const emailFeedback = document.querySelector("#emailFeedback");

// regex for email
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// regex for password
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;




form.addEventListener("submit", function (event) {
  event.preventDefault();

  // checking if the enetered/input value meet the conditions set in the regex
const emailAns = emailRegex.test(email.value);
 
  // will run if statement when emailAns is false or the input didn't meet the regex condtions
  if (!emailAns) {
    emailFeedback.textContent = "Email is incorrect ";
  } else {
    emailFeedback.textContent = "";
  }
});


const ruleLength = document.querySelector("#rule-length");
const ruleUppercase = document.querySelector("#rule-uppercase");
const ruleNumber = document.querySelector("#rule-number");
const ruleSpecial = document.querySelector("#rule-special");



password.addEventListener("input", function () {
  // checking the password one by one with the regex conditions
  const hasLength = password.value.length >= 8;
  const hasUppercase = /[A-Z]/.test(password.value);
  const hasNumber = /[0-9]/.test(password.value);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password.value);

  const passwordAns = passwordRegex.test(password.value);

  if (hasLength) {
    ruleLength.classList.remove("invalid");
    ruleLength.classList.add("valid");
  } else {
    ruleLength.classList.add("invalid");
    ruleLength.classList.remove("valid");
  }

  if (hasUppercase) {
    ruleUppercase.classList.remove("invalid");
    ruleUppercase.classList.add("valid");
  } else {
    ruleUppercase.classList.remove("valid");
    ruleUppercase.classList.add("invalid");
  }

  if (hasNumber) {
    ruleNumber.classList.remove("invalid");
    ruleNumber.classList.add("valid");
  } else {
    ruleNumber.classList.remove("valid");
    ruleNumber.classList.add("invalid");
  }

  if (hasSpecial) {
    ruleSpecial.classList.remove("invalid");
    ruleSpecial.classList.add("valid");
  } else {
    ruleSpecial.classList.remove("valid");
    ruleSpecial.classList.add("invalid");
  }

  if (passwordAns) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
});
