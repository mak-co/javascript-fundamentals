// 1
// function animal(species){
//     this.species = species
// }


// animal.prototype.sound = function () {
//     return `${this.species} makes a good sound`

// };
// let dog = new animal("dog");
// console.log(dog.sound())



// revision 

// function Person(name, age){
//     this.name = name 
//     this.age = age
// }

// let john = new Person("John", 20)
// console.log(john)


/* 🧪 It creates a new empty object: {}

📌 It sets this inside the function to point to that new object

🧠 It runs the code inside the function, assigning properties to this

🎁 It returns the new object (unless the function returns another object manually)
*/

// 

function Animal(type){
    this.type = type
}
Animal.prototype.speak = function(){
    return `${this.type} makes a sound`
}

// let dog = new Animal('dog');
// // Now dog = { type: "dog", __proto__: Animal.prototype }

// console.log(dog)

Array.prototype.hitesh = function () {
  return `Custom method ${this}`;
};

let myArray = [1, 2, 3, 4, 5];
console.log(myArray.hitesh());


// PROTOTYPE METHOD QUESTIONS FOR PRACTICE 

// Can you create a method on all arrays called .sum() that returns the total of all numbers in the array?
// let myArray1 = [2, 3, 34, 4, 3, 2, 2334, 23];
// Array.prototype.sum=function(){
//   let sum = 0;
//   for (let i=0; i<this.length; i++){
//     sum = sum +this[i];
//   }return sum; }
// console.log(myArray1.sum())

/* Class -Imagine a class like a mold to make cookies 🍪.
Once the mold is ready, you can use it to make as many cookies (objects) as you want, each with its own details (name, age, etc). */


// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return `Hello, I am ${this.name} and I am ${this.age} years old.`;
//   }
// }

// let user1 = new Person("Murtuza", 22);
// console.log(user1.greet());













