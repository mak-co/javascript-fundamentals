let obj = {}
console.log(obj);
console.log(typeof obj);


// inner elem of the obj are prim, mtlab obj const hone ke bawjood inner element changeable he -------sahi bhi galat bhi def

const username = {
    "first name" : "mak",
      isLoggedin : true
};

username.firstname = "Mr. "
username.lastname = "khan"
console.log(username.firstname);
console.log(username.lastname);

//  or you can use this & this will also help you get elem with space such as below:
console.log(username['first name'])


// date thing
let today = new Date();
console.log(today.getDate());

// date() is a string while new Date() is a construction function and to print the date you 
console.log (new Date());   



// --------------------ARRAY------------------------------------------
//IT IS JUST A COLLECTION OF THINGS

let Superheros = [" Batman", "metalman", "SuperMan",true];
let anotherUser =  [true, "murtuza", "ali"]
console.log(anotherUser[1]) 
 


// FIVE Challenges on Conditions
// C1-- check if a number is greater than another number
let num1 = 5
let num2 = 8
if (num1>num2){
  console.log("num1 is greater than num2")}
  else{
    console.log("num2 is greater than num1")
  }


// C2-- Check if a string is equal to another string 
let _1username = "chai"
let anotherUsername = "chai2"
if (_1username==anotherUsername){
  console.log("strings are equal")
}else{console.log("not equal")}

// C3-- Check if a variable is a number or not:
let _1num = 22
if (typeof _1num === 'number'){
  console.log("it is a number")
}else{console.log("not a number")}


// Check if a boolean value is true or false: 

let AreyouGay = false
if ( AreyouGay){
  console.log("10 YEAR JAIL ")
}
  else{console.log("Congrats, You're free to go")
  }

// check if an array is empty or not

let items = [1]
if (items.length==0){
  console.log("array is empty")
}else{
  console.log("array is not empty")
}


// ----------------------------LECT---------FACING TEN CHALLENGES IN ARRAY AND METHODS------------------

// 1. ACCESS THE FIRST ELEMENT OF THE ARRAY AND STORE IT IN A VARIABLE NAMED 'firstTea'

let _1array = ["car", "bike","rikshaw"]
let firstTea = _1array[0]
console.log(firstTea)

// 2. Declare an array neame 'CitiesVisited' contaiaing 'Mumbai' & 'Sydney' Add "Berlin to the array using the `push` method"

let CitiesVisited = ['Mumbai', 'Sydney']
CitiesVisited[2] = 'Berlin'
console.log(CitiesVisited);

// 3. you have an array named `teaTypes` containing "herbal tea", "white tea" and "masala chai", Change the second element of the array to "jasmine tea"

let teatypes =["herbal tea", "white tea", "masala chai"]
teatypes[1]= "jasmine tea"


// 4. you have an array named `teaOrders` with "chai", "iced tea", "motcha" and "earl grey", Remove  the last element of the array using the `pop` method and store it in a variable named `lastTea`

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"]
// teaOrders.pop(): // this will remove the last element of the array
const LastTea = teaOrders.pop(3)
console.log(teaOrders)
console.log(LastTea)


// You have an array named `topCites` containing `"Berlin ", `"Singapore" and "New York", Create a hard copy of this array named `hardCopyCities`.

let topCites = ["Berlin", "Singapore", "New York"]
let hardCopyCities = [...topCites]
topCites.pop();   // this will remove the last element of the array 
console.log(topCites);
console.log(hardCopyCities)



// You have two arrays: `eruopeanCities` containing "Paris" and "Rome" and `asianCities` containing "Tokyo" and "Beijing". Combine these two arrays into a single array named `worldCities`.
let europeanCities = ["Paris", "Rome"]
let asianCities = ["Tokya", "Beijing"]
let worldCities = europeanCities.concat(asianCities)
console.log(worldCities)



// You have an array named `teaMenu` containing "masala chia", "oolon tea", "grean tea" and "earl grey". Find the length of the array and store it in a variable named `menuLength`

let teaMenu = [ "masala chia", "oolon tea", "grean tea", "earl grey"]
let menyLength = teaMenu.length



//  You have an array named `cityBucketList` containing "Kyoto", `"London", "Cape Town" and "Vancouver", Check if "London" is in the array and store the result in a vareable naemd `isLondonInList`
let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"]
let isLondonInList = cityBucketList.includes("London")
