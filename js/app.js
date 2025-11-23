// get an element in my JS
// same selector as your css selector
const mainHeaderElement = document.querySelector('#main-header')

console.log(mainHeaderElement)


// changing the text (content) in my element
mainHeaderElement.textContent = 'Changed Website header'


const navLinkElement = document.querySelector('#nav-link')

console.log(navLinkElement)

// to edit ANY attribute use . (dot) notation

navLinkElement.href = 'https://www.google.com'

navLinkElement.style.color = 'red'

navLinkElement.style.backgroundColor = 'purple'


mainHeaderElement.style.backgroundColor = 'red'



// Exercise 1:
// 1. add an img tag to your html with the id cat-image
// 2. in your js fetch the img tag using querySelector
// 3. change the src to a cat image from online: https://img.freepik.com/free-photo/portrait-beautiful-purebred-pussycat-with-shorthair-orange-collar-neck-sitting-floor-reacting-camera-flash-scared-looking-light-indoor_8353-12551.jpg?semt=ais_hybrid&w=740&q=80
// 4. change the alt attribute to cat-picture





// querySelector(): always returns ONE element
const todoItemElements = document.querySelectorAll('.todo-items')

console.log(todoItemElements)



// forEach()
// todoItemElements.forEach(function(oneLiElement){
//     console.log(oneLiElement.textContent)

//     if(oneLiElement.textContent === 'JavaScript'){
//         oneLiElement.style.color = 'red'
//     }
//     else if(oneLiElement.textContent === 'CSS'){
//         oneLiElement.style.color = 'blue'
//     }
// })




// creating a new element

const mainDiv = document.querySelector('#main-div')


console.log(mainDiv)

// 1. create the element
const pElement = document.createElement('p')

// 2. populate the element
pElement.textContent = 'new P Element'

// 3. append to the page
mainDiv.appendChild(pElement)

console.log(pElement)


const mainButton = document.querySelector('#main-button')


console.log(mainButton)

// Events (Next class I promise - Omar)
// 2 arguments of the addEventListener
// 1. what type of event
// 2. function

function sayHello(){
    console.log('hello Bahrain')

    // for of
for(let oneLiElement of todoItemElements){
    console.log(oneLiElement.textContent)

    if(oneLiElement.textContent === 'JavaScript'){
        oneLiElement.style.color = 'red'
    }
    else if(oneLiElement.textContent === 'CSS'){
        oneLiElement.style.color = 'blue'
    }
}

}

mainButton.addEventListener('click',sayHello)