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

// SessionStorage
sessionStorage.setItem("day","monday")
//now when you close the tab the data inside the session starage will be deleted 


// Cookie
document.cookie= "hello"


// ---------------Practice Project ------------------
// Creating Dark Mode---
// let btn = document.querySelector("button")
// btn.addEventListener("click",function(){
//     if(document.body.classList.contains("lightmode")){
//     document.body.classList.remove("lightmode")
//     document.body.classList.add("darkmode")
// }else{
//     document.body.classList.add("lightmode")
// }})


// Problem in the above code - when reloadign the page the dark mode changes back to its initial class light mode

//soluiton - we will be using localstorage so even after closign tab or the browser our page will look similar as we left it 


let btn = document.querySelector("button")
btn.addEventListener("click",function(){
    if(document.body.classList.contains("lightmode")){
    document.body.classList.remove("lightmode")
    document.body.classList.add("darkmode")
    localStorage.setItem("classList","darkmode")
    console.log(localStorage)

}else{
    document.body.classList.remove("darkmode")
    document.body.classList.add("lightmode")
    localStorage.setItem("classList", "lightmode")
    console.log(localStorage)
   

}})

function reload(){
    let clsList = localStorage.getItem("classList")
    console.log(clsList);
    document.body.classList.add(clsList)
    if (
      clsList === "darkmode" &&
      document.body.classList.contains("lightmode")) {
      document.body.classList.remove("lightmode");
      document.body.classList.add("darkmode");
    }else{
        document.body.classList.add("lightmode")
    }
}

reload()

