// Add a highlight call to every even item in a list 



let ul1 = document.querySelector("ul");
// let lists = ul1.querySelectorAll("li");
 
// lists.classList.add("highlight")

// the above code will not work bcoz in 2nd line u are using querySelectroAll & querySelectorAll returns a NodeList (a collection of elements), not a single element. You cannot apply classes directly to a list without looping through it.

// lists is havign collection of lists which is nodelist in dom and classList only exists on INDIVIDUAL elements. so we need to loop through it 



// therefor U need to loop through the lists using the 

let lists = ul1.querySelectorAll("li")

// the following is a noob way to highligh and if the list is big would u still use the follwoing code obviously NO!
lists[1].classList.add("pink")
lists[3].classList.add("pink")
// SO We will use foreach loop around the list and add class list one by 



// first using for loop 

    // for (let i=0 ;i<=lists.length;i++){
    //     if(i%2==0){
    //         lists[i].classList.add("highlight")
    //     }
    //     }
   

// using foreach

lists.forEach((list, index)=>{
    if(index%2==0){
        list.classList.add("highlight")
    }
}) 


// 2- Set the font size of all the <p> elelments to 18px using style
// Note - class List is more preferred

let p = document.querySelector("p")
p.style.fontSize = "28px ";

// but why not the other 2 paras font got changed bcoz we use queryselector which only work on the first element
// and to select all we need to to use queryselectorAll but it will give us a NodeList therefore for this too we need forEach loop 

p.forEach(ptag=>{
    ptag.style.fontSize("18px")
})






