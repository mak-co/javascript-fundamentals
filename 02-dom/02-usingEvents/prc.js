// creating a to-do lists

// querySelector() selects the FIRST matching element only.
// Here it selects the first <ul> element from the DOM.

let ul1 = document.querySelector("ul");


// querySelectorAll() returns a NodeList (a collection of elements).
// If multiple <ul> elements exist, all of them are stored inside the NodeList.

// Example:
// let ul1 = document.querySelectorAll("ul");


// Since querySelectorAll() returns multiple elements,
// we usually use forEach() to loop through each <ul> one by one.

// Then inside each <ul>, we can use querySelectorAll("li")
// to get all list items and loop through them again if needed.


// Creating an add button while adding event to it
let add = document.createElement("button")
add.textContent = "click to add "

add.addEventListener("click",()=>{

  if(input.value !== ""){
    let textLi = document.createElement("li")
    textLi.textContent = input.value

    ul1.appendChild(textLi)

    input.value = ""
  }else{
    alert("Write Something")
  }
 
})

document.body.append(add)


// Creating a remove button while adding event 
let remove = document.createElement("button")
remove.textContent = "Remove the item"

remove.addEventListener("click",()=>{
  let lastLi = ul1.lastElementChild;
  if(lastLi){
    ul1.removeChild(lastLi)
  }else{
    alert("no item")
  }
})

document.body.append(remove)

// creating an input section to enter the item and add into the list

let input = document.createElement("input")
input.placeholder = "Type here...."



document.body.append(input)



