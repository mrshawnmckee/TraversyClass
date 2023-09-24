// const para = document.getElementById('graph')


// para.innerText= "this is also a paragraph"

// document.getElementById('graph').innerText = "This is a sentence"

// //Change ID title
// // document.getElementById('graph').title = 'new-id';


//Create a variable for use
const title = document.getElementById('pageTitle')

// Change content  ##Must be in quotes#
// title.innerHTML = '<h4>Hello Again</h4>'

// Change styles  ## Must use camelCase, no "-" allowed
// title.style.color = "blue";
// title.style.backgroundColor = "yellow"


// document.querySelector, can use for ('h1'), or a class('.para')

// Choose second item in a list
// document.querySelector('li:nth-child(2').innerText



// //  ###Looking at chile/parent/sibling elements
// let output; 


// // Parent elements to access child elements
// const parent = document.querySelector('.parent');

// output = parent.children[1].innerText = "Child Two"
// output = parent.children[1].style = "color: blue";


// // child elements to access parent elements
// const child = document.querySelector('.child');
// output = child.parentElement;

// child.parentElement.style.border = '1px solid black';


// // Sibling elements

// const secondItem = document.querySelector('.child:nth-child(2')
// output = secondItem  //Will access child two
// output = secondItem.nextElementSibling  //access child three; there is also previousElementSibling

// // DOM node relationship will work with all nodes, not just element nodes


// console.log(output)




// // Creating elements

// const div = document.createElement('div'); //this puts it in memory, not placed in page
// div.className = 'myNewElement'; 
// const text = document.createTextNode('Hello World');
// div.appendChild(text)  

// document.body.appendChild(div)


// // Creating the function:

// function createListItem(item){
//     const li = document.createElement('li')

//     li.innerHTML = `${item}`

//     document.querySelector('.listed').appendChild(li)
// }

// createListItem('eggs')
// createListItem("radish")


// Replace first item 

function replaceFirstItem(){
    const firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li');
    li.textContent = "Replaced First item"

    firstItem.replaceWith(li);
}

replaceFirstItem()


function replaceAllItems() {
    const lis = document.querySelectorAll('li');
    lis.forEach((item, index) => item.outerHTML = index === 1 ? '<li>SecondItem</li>'  :'<li>replaced</li>'
)
}

replaceAllItems()

// remove elements (example, delete form a list) == .remove()

//AddEventListener
const clickMe = document.querySelector('.clickMe')



// clickMe.addEventListener("click", () => {
//     // alert("You clicked me")
//     // clickMe.innerText ="I was clicked"
// })


function changeButton(){
    alert("You clicked me")
    clickMe.innerText ="I was clicked"
}
// you can also pass in functions, but dont call the function or it will run at page load
clickMe.addEventListener('click', changeButton)
