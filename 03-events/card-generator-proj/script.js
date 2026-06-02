// first of we will prevent the refreshing behaviour of the page when clicking the refresh button
let form = document.querySelector("#details");
form.addEventListener("submit", function (event){
    event.preventDefault();
});

let profilePhoto = document.querySelector("#document-upload");
let img = document.querySelector("img");
let formDiv = document.querySelector(".formDiv");
let genCard = document.querySelector(".genCard")



// creating variable for all the details to be on card

let name = document.querySelector(".name")
let age = document.querySelector(".age")
let email = document.querySelector(".email")
let phone = document.querySelector(".phone")
let qualification = document.querySelector(".qualification")


// creating variable for all the details in the form 
let nameF = document.querySelector(".nameF")
let ageF = document.querySelector(".ageF");
let emailF = document.querySelector(".emailF");
let phoneF = document.querySelector(".phoneF");
let qualificationF = document.querySelector(".qualificationF");

form.addEventListener("submit", function () {
    let file = profilePhoto.files[0];

    if (file) {
        img.src = URL.createObjectURL(file);

        formDiv.style.display = "none";
        genCard.classList.remove("displayNone")

        // adding text to the card
       name.textContent =  nameF.value;
       age.textContent = `Age: ${ageF.value}`;
       email.textContent = `Email: ${emailF.value}`;
       phone.textContent = `Phone: ${phoneF.value}`;
       qualification.textContent = `Qualification: ${qualificationF.value}`;
    }
});
