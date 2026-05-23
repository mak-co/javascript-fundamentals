let b = document.querySelector("h1")
console.dir(b)
b.textContent = "How's life"

let c = document.createElement("h1")
c.textContent = "Life's painful "

document.body.append(c)

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

link2.href = "https://www.youtube.com"
link3.href = "https://www.youtube.com"
link2.textContent = "click here to visit youtube"
link3.textContent = "click here to visit youtube";
// append() handles both easily:

document.body.append(link2,document.createElement("br"),link3);

// appendChild() makes you do it line by line:


let link4 = document.createElement("a")
let link5 = document.createElement("a")

link4.href = "https://wikipedia.com"
link5.href = "https://wikipedia.com"

link4.textContent = "click here to visit wikipedia"
link5.textContent = "click here to visit wikipedia"


document.body.appendChild(document.createElement("br"));
document.body.appendChild(link4)
document.body.appendChild(document.createElement("br"))
document.body.appendChild(link5)


// we faced problem of all the anchor tag in one line so we use document.createElement("br") to push the anchor tag in other line