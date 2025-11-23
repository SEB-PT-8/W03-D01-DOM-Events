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