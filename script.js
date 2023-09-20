document.querySelector('h1').innerText = "hello world"

// // Challenge one, change first letter of word to uppercase without loop
// const myString = 'developer'
// console.log(myString)
// const myNewString = myString[0].toUpperCase() + myString.substring(1)
// console.log(myNewString);


// //Challenge two simple array problems

// //combine arrays, but leave out the duplicate 5
// const arr1 = [1,2,3,4,5]
// const arr2 = [5,6,7,8,9]
// arr1.pop();
// // console.log(arr1)
// const arr3 = [...arr1, ...arr2]
// console.log(arr3);

// //reverse array and add 0 to beginning and 6 at the end
// const arr4 = [1,2,3,4,5]
// arr4.push(6);
// arr4.unshift(0)
// arr4.reverse();
// console.log(arr4)


// // ## ARRAY CHALENGE ##
// const library = [
//     {
//     title: 'The book',
//     author: 'Fred',
//     status: {
//         own: true,
//         reading: false,
//         read: false
//         }
//     },
//     {
//     title: 'The Second Book',
//     author: 'Barney',
//     status: {
//         own: true,
//         reading: false,
//         read: false
//         }
//     },
//     {
//         title: 'The Third book',
//         author: 'Wilma',
//         status: {
//             own: true,
//             reading: false,
//             read: false
//         }
//     }
    
// ]

// //Change the value of read to true for all the books
// for (let i = 0; i < library.length; i++){
//     library[i].status.read = true   
// }
// console.log(library)

// //Change the title from the first book and name it first book

// library[0].title = "firstBook"

// // Convert Library object to a JSON string: 

// const str = JSON.stringify(library)
// console.log(String)

// ## Function Challenges  

// Challenge 1: create a function that takes a temperature in F and converts it to 

// let fDegrees = prompt("WHat is the degree in F")
// const conversion = n => (n - 32) * 5/9

// alert(`The temperature is ${conversion(fDegrees)} \xB0C`)

// // Challenge two: Min/max; create function that takes in an array and returns an object with the min and max numbers without looops

// function minMax(arr) {
//     const min = Math.min(...arr)
//     const max = Math.max(...arr)

//     return {
//         min: min,
//         max:max
//     }
// }

// console.log(minMax([1,2,3,4,5]))

// //  Challenge, simple calculator

// let num1 = prompt("First Number")
// let expression = prompt("add, subtract, multiply, or divide")
// let num2 = prompt("second number")

// let answer = 0;
// let mynum1 = Number(num1)
// let mynum2 = Number(num2)



// switch (expression) {
//     case "+" :
//         answer = mynum1 + mynum2;
//         break;
//     case "-" :
//         answer = mynum1 - mynum2;
//         break;
//     case "*" :
//         answer = mynum1 * mynum2;
//         break;
//     case "/" :
//         answer = mynum1 / mynum2;
//         break;
//     default: 
//         alert("error");    
// }


// alert(`${num1} ${expression} ${num2} = ${answer}`)

// 

// const numbers = [1,2,3,4,5];

// const numGreaterTHan3 = numbers.filter(num => num > 3);
// console.log(numGreaterTHan3);
// const doubledNumbers = numbers.map((num) => num * 2);
// console.log(doubledNumbers)


// //Using reduce like in a shopping cart to find the total

// const cart = [
//     {id:1, name: 'Product1', price: 130 },
//     {id:2, name: 'Product2', price: 150 },
//     {id:3, name: 'Product3', price: 175 },
// ]

// const total = cart.reduce((acc, cur) => acc + cur.price, 0)
// console.log(total)


// Array method Challenge 1, create an array called young people and store only name and email of people 25 and under
const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      phone: '333-333-3333',
      age: 45,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      phone: '444-444-4444',
      age: 19,
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      age: 23,
    },
  ];

//   remember, in the object key:value and extra parenthesis
const youngPeople = people
    .filter((person) => person.age <= 25)
    .map((person) => ({
        name: person.firstName + ' ' + person.lastName,
        email: person.email,
}))


console.log(youngPeople)


// Array Method challenge 2; add all og the posisitve numbers in the array with array methods
const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers
    .filter((num) => num > 0)
    .reduce((acc, cur) => acc + cur, 0)

console.log(positiveSum)

// Array Challenge 3; create a new array called Capitalized words that has the first letter of each word capitalized

const words = ['coder', 'programmer', 'developer'];

const capitalizedWords = words.map( word => word[0].toUpperCase() + word.slice(1))


console.log(capitalizedWords)