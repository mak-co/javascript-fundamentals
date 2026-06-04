let unorderList = document.querySelectorAll("li");
unorderList.forEach((li)=>{
    li.addEventListener("click",function(){
        li.classList.toggle("line-through"); 
    })
})



// creating a letter left input like twitter
const inp = document.querySelector("input")
const letterLeft = document.querySelector("span")


inp.addEventListener("input",function(){
    letterLeft.textContent = 4 - inp.value.length
    if(letterLeft.textContent<=0){
        letterLeft.style.color = "red"
    }else{
                letterLeft.style.color = "white";


    }
})

