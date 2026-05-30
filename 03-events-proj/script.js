//   we have already click and input in the to do list project in forlder 2 now we're gonna learn about the following events  

// 3) Change Event 

let sel =   document.querySelector(".select1")
// usign .select as select is a class name not a tag
sel.addEventListener("change",function(){
    // first checking what are we selecting in the console by printing the sel.value
    console.log(sel.value)
    if(sel.value=="Hakla-Srk"){
        let img= document.querySelector(".card-image")
        img.src="./image/hakla.jpg"
    }
    if(sel.value=="Suja-Salman"){
        let img= document.querySelector(".card-image")
        img.src="./image/suja-salman.jpg"
    }
    if(sel.value=="Banana-Akki"){
        let img= document.querySelector(".card-image")
        img.src="./image/banana-akki.png"
    }
    if(sel.value=="Vimal-Ajay"){
        let img= document.querySelector(".card-image")
        img.src="./image/ajay-vimal.jpg"
    }
})
