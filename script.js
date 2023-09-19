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

// FizzBuzz

for (let i = 1; i <101; i++) {
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if ( i % 3 === 0){
        console.log("Fizz");
    } else if (i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i)
    }

}