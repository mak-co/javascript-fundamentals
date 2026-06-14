// How to store data
localStorage.setItem("name","Murtuza");

// How to get the item
let getItem = localStorage.getItem("name")
console.log(getItem)
document.querySelector(".p2").textContent += getItem

//Remove Item
localStorage.removeItem("name")

// update item - setitem works for it , as it will update the localstarage

// In following we are saying if name exist then update it else create it 

localStorage.setItem("name","Azutrum")





