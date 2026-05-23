// TYPES- 1) PRIMITIVE & 2) NON PRIMITIVE

/* 1) PRIMITIVE - STRING, BOOLEAN, NUMBER, NULL, SYMBOL

2) OBJECTS - ARRAY, FUNCTION, OBJECTS

*/

// ------PRIMITIVE----------------


// NUMBER

let balance= 200;
console.log(typeof balance);
console.log(balance.length);
let anotherbal = new Number(220);
console.log(balance)
console.log(anotherbal.valueOf());

console.log(typeof balance)
console.log(typeof anotherbal)

//  Bolean

let isActive = true;
let isReallyActive = new Boolean(true); //not recommended



// null & Undefined 
let firstname;
console.log(firstname)



// string 
let name1 = "Murtuza";
let sirname = "Ali Khan"
let newname = `Hello ${name1} ${ sirname}!`
console.log(newname)


// SYMBOL
const sm1 = Symbol("hello1");
const sm2 = Symbol("hello1");
console.log(sm1 == sm2)





