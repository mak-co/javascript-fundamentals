/* 1. Write a function named 'makeTea' that takes one parameter, "typeOfTea" and returns a string like "Making green tea" when called with "grean tea", store the result in a variable named 'teaOrder' 
*/


// function makeTea(typeOfTea) {
//     return 'Making ' + typeOfTea
    
// }
// let teaOrder = makeTea("ice tea");
// console.log(teaOrder);



/* 2. Create a funciton named 'orderTea' that takes one parameter, 'teaType' , Inside this function, create another function named 'ConfirmOrder' That returns a message like "Order confirmed for Chai", Call 'confirmOrder' from within 'orderTea' and return the result.
*/

// function orderTea(teaType) {
//     function ConfirmOrder(param1) {
//         return "Order confirmed for Chai";
        
//     }
    
// }


/* 3. Write an arrow function named 'calculateTotal' that takes two parameters: 'price' and 'quantity'. The function should return the total cost by multiplying the 'price' and 'quantity'.
sotre the result in a variable named 'totalCost'
*/

// let calculateTotal = ( price, quantity)=>{return price*quantity}
// let totalCost = calculateTotal(499,10)
// console.log(totalCost)


/* 4. Write a function named 'processTeaOrder' that takes another function 'makeTea', as a parameter and calls it with the argument 'earl grey'. Return the result of calling 'makeTea'
*/


/* 5. Write a function named 'createTeaMaker' that returns another function. The returned function should take one parameter, 'teaType', and return a message like '"Making green tea "
Store the returned function in a variable named 'teaMaker' and call it with 'green tea'.
*/


function createTeaMaker(){
    return function(teatype) {
      return `making ${teatype}`;
    };
}

let teaMaker = createTeaMaker()
console.log(teaMaker('chocolate tea'));