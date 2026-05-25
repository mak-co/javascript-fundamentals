let b = document.querySelector("h1");
console.dir(b);
b.textContent = "How's life";

let c = document.createElement("h1");
c.textContent = "Life's painful ";

document.body.append(c);

// // for beginners:
// Use textContent by default.
// Use innerHTML carefully.
// Rarely need innerText.

let link1 = document.createElement("a");
link1.href = "https://www.google.com";

// now how can i add the text where i click and open the link
link1.textContent = "Click here to visit Google";

// but there is nothing like the "Click here to visit Google" on the scree
// use appendchild
document.body.appendChild(link1);
document.body.append(link1, document.createElement("br"));

// but what is the difference between append and appendchild

let link2 = document.createElement("a");
let link3 = document.createElement("a");

link2.href = "https://www.youtube.com";
link3.href = "https://www.youtube.com";
link2.textContent = "click here to visit youtube";
link3.textContent = "click here to visit youtube";
// append() handles both easily:

document.body.append(link2, document.createElement("br"), link3);

// appendChild() makes you do it line by line:

let link4 = document.createElement("a");
let link5 = document.createElement("a");

link4.href = "https://wikipedia.com";
link5.href = "https://wikipedia.com";

link4.textContent = "click here to visit wikipedia";
link5.textContent = "click here to visit wikipedia";

document.body.appendChild(document.createElement("br"));
document.body.appendChild(link4);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(link5);

// we faced problem of all the anchor tag in one line so we use document.createElement("br") to push the anchor tag in other line

// Remove -
let removeitem = document.createElement("h1");
removeitem.textContent = "Namaste Dunia";
document.body.append(removeitem);

removeitem.remove();

// Changing css with the help of js
// first we will create css in html inside the style tag
let heading2 = document.createElement("h1");
heading2.textContent = "Changing css using js";
document.body.append(heading2);
heading2.classList.add("hylight-text","center");

// following is a function that uses built in browser function (Web Api) that will  help delaying the execution of the funciton and whereas the funciton is helping in adding the css into the element

function AddCssAfterDelay(element, time) {
  setTimeout(() => {
    element.classList.add("hylight-text" );
  }, time);
}

let heading3 = document.createElement("h1");
heading3.textContent = "Css will appear after 2000 ms";
heading3.classList.add("center")
document.body.append(heading3);

AddCssAfterDelay(heading3, 2000);

let border = document.createElement("hr")
document.body.append(border)

// 4) Select all <Li> Elements and print their text using a loop.

let heading4 = document.createElement("h1");
heading4.textContent = "Top famous Bald Personalities ";
heading4.classList.add("center")
document.body.append(heading4);

// a) adding image
// first create a div which will help to center the image 
let imgdiv = document.createElement("div")
imgdiv.classList.add("center")
document.body.append(imgdiv)

// creating img adding its source and styling 
let img1 = document.createElement("img");
img1.src = "./bald-men.jpg";
img1.alt = "Description of the image";
img1.classList.add("img")

// Correctly append the image to the 'imgdiv' variable you created

imgdiv.append(img1);

// ---added the image----- //

// b) crating name list usign funciton and array of the names

function baldMenList(dataArray){
    // creatign the ordered list element 
    const ol = document.createElement("ol")

    // loop through the aray to create the list items

    dataArray.forEach((names)=>{
        // creating list element and adding names from the array into the li element one by oen following the forEach loop 
        const li = document.createElement('li')
        li.textContent = names
        ol.appendChild(li)
    });
    return ol

}

const BaldMenArray = ["Vin Diesel", "Jeff Bezos", " S","Jason Statham","Musk Melon" ]
imgdiv.append(baldMenList(BaldMenArray))

let addYourFriend = document.createElement("button")
let EnterName = document.createElement("form")

