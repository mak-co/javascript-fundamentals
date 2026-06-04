// understanding mouseover/mouseout

let div1 = document.querySelector(".div1");
let text1 = document.querySelector(".text1");

div1.addEventListener("mouseover",function(){
    div1.style.backgroundColor = "LightCoral";
    text1.style.color="black"
});

div1.addEventListener("mouseout", function(){
    div1.style.backgroundColor = "brown"
    text1.style.color = "white"
})


// understanding mouse move
let circle = document.querySelector(".circle")
window.addEventListener("mousemove",function(dets){
    // console.log(dets.pageX, dets.pageY)
    circle.style.position = "absolute"
    circle.style.left = dets.clientX +"px"
    circle.style.top = dets.clientY +"px"


})