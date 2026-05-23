// 1. write a while loop that calculates the sum of all mumbers from 1 to 5 and stores the result in a variable 

// let sum =0;
// let i =1;
// while (i<=5) {
//     sum=sum+i
//     i++;
// }
// console.log(sum);



// 2. Write a while loop that counts down from 5 to 1 and stores the numbers in the array named countdown
// let num=5;
// let i =5;
// let countdown=[]
// while (i>0) {
//     countdown.push(i)
//     i--;     
// }
// console.log(countdown)



// 3. Write a 'do while' loop that prompts a user to enter their favorite tea type until they enter "stop", store each type in an array named "teaCollection".


// ----note-------use chorme browser inspector
// let teaCollection = []
// let tea
// do {
//     tea = prompt(`Enter your favourite tea(type "stop" to finish)`)
//     if (tea !== "stop"){
//         teaCollection.push(tea)
//     }
// } while (tea !== "stop");




// 4. write a do while loop that adds numbers from 1 to 30 and stores the result in a variable named `total`

// let total = 0;
// let num2 = 0;
// do {
//   total = total +num2
//   num2++;
// } while (num2 <= 30);
// console.log(total);





// 5. write a `for` loop that multiplies each element in the array `[2,4,6] by 2 and stores the result in a anew array named `multipliedNumbers`.

// let multipliedNumbers = [];
// let ar1 = [2,4,6]
// for (let index = 0; index < ar1.length; index++) {
//     multipliedNumbers.push(ar1[index]*2)
// }
// console.log(multipliedNumbers)




// 6. write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"] and stores each city in a new array named `cityList`

// let cities = ["Paris", "New York", "Tokyo", "London"];
// let cityList = [];
// for (let index = 0; index < cities.length; index++) {
//     console.log(cities[index]);
//     cityList.push(cities[index]);
//     cityList.unshift(cities[index]);
// }
// console.log(cityList)




// THE TEN LOOP CHALLENGES
// 1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"] and stops the loop when it finds "chai", store all teas before "chai" in a new array named `selectedTeas`.

// let ar2 = ["green tea", "black tea", "chai", "oolong tea"];
// let selectedTeas = [];
// for (let index = 0; index < ar2.length; index++) {
//     if (ar2[index] === "chai"){
//       //=== checks for equality without type conversion. It returns true only if both the value and the data type of the operands are the same. If the types differ, it returns false
//       break;
      
//     } selectedTeas.push(ar2[index]);
// }
// console.log(selectedTeas)


// 2. write a `for` loop that loops through the array ["Londaon", "New York", "Paris", "Berlin"] and skips "Paris", store the other cities in a new array named `visitedCites`

// let cities = [ "London", "New York", "Paris", "Berlin"]
// let visitedCites = [];
// for (let index = 0; index < cities.length; index++) {
//     if (cities[index]!="Paris"){
//         visitedCites.push(cities[index])
//         continue
//     }
// }
// console.log(visitedCites)



// 3. Use a for-of loop to iterate through the array [1,2,3,4,5] and stop when the number `4` is found store the numbers before `4` in an array Named `smallNumbers`.

// let ar3 = [ 1,2,3,4,5];
// let ar4= [];
// for (const x of ar3 ) {
//     if (x===4){
//     break;
//     }ar4.push(x);
    
// }
// console.log(ar4)



// 4. Use a `for-of` loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"] and skip "herbal tea", store the other teas in an array named `preferredTeas` 
// let ar5 = ["chai", "green tea", "herbal tea", "black tea"];
// let preferredTeas = [];
// for (const x of ar5) {
//     if (x!="herbal tea"){
//         preferredTeas.push(x)
//     }
    
// }
// console.log(preferredTeas)


/* 5. Use a for-in loop to loop thorugh an object containing city populations, Stop the loop where the population of "Berlin" is found and store all previous cities, populations in a new object named `cityPopulations`.

   let citiesPopulation = {
   "london" : 8900000,
   "New York : 8400000,
   "Paris : 2200000"
   "Berlin" : 3500000}
};

*/

// let citiesPopulation = {
//    "london" : 8900000,
//    "New York" : 8400000,
//    "Paris" : 2200000,
//    "Berlin" : 3500000
// }

/* 
-- The Object.keys() method returns an array with the keys of an object.

-- The Object.keys() method does not change the original object
*/
// console.log(Object.keys(citiesPopulation));
// console.log(Object.values(citiesPopulation));


// let CityNewPopulations = {};
// for (const city in citiesPopulation) {
//     if (city == "Berlin"){
//         break;
//     }
//     CityNewPopulations[city] = citiesPopulation[city];
// }
// console.log(CityNewPopulations)
// console.log(citiesPopulation.city);

/* 6. Use a 'For-in' loop to loop through an object containing a city populations, 
           skip any city with a population below 3 million and store the rest in a new object named 'largeCities'

           */
// let worldCities = { 
//      "Sydney" :5000000,
//      "Tokya" : 900000,
//      "Berlin" : 35000000,
//      "Paris" : 22000000
// };
// let largeCities = {};
// for (const city in worldCities) {
//     if(worldCities[city]<3000000){
//         continue;
//     }
//     largeCities[city] = worldCities[city];
// }
// console.log(largeCities)


/* write a "forEach" loop that iterates through the array  [ "earl grey", "green tea", "chai", "oolong tea"]
stop the loop when "chai" is found, and store all previous tea types in an array named 'availableTeas'.
*/

// let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
// let availableTeas = [];
// teaCollection.forEach(function(tea){
//     if(tea== "chai"){
//         return;
//     }
//     availableTeas.push(tea);
// });
// console.log(availableTeas);




/* 8. write a 'forEach' loop that iterates through the array ["Berlin", "Tokyo", "Sydney","Paris"]
skip "Sydney" and sotre the other cities in a new array named 'traveledCities'
*/
let cities1 = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];
cities1.forEach(function(city){
    if(city != "sydney"){
        traveledCities.push(city)
    }
}
);
console.log(traveledCities)



/* write a 'for' loop that iterates through the array [2,5,7,9] skip the value '7' and multiply the rest by  2, store the results in a new array named 'doubledNumbers'
*/
let arNum = [ 2,5,7,9];
let doubledNumbers = [];
for (let index = 0; index < arNum.length; index++) {
    if (arNum[index]=== 2) {
        continue
    } 
    doubledNumbers.push(arNum[index ] * 2); 
}
console.log(doubledNumbers);



/* 10. Use a 'for-of' loop to iterate through the array ['chai','green tea','black tea', 'jasmine tea', 'herbal tea'] and stop whn the length of the current tea name is greater than 10, store the teas iterated over in an array named 'shortTeas'
*/

let chais = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const element of chais) {
    if (element.length>10) {
        break
        
    }
    shortTeas.push(element);
    
}
console.log(shortTeas)
  



