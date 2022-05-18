const colors = ['red', 'green', 'blue', 'rgba(0, 0, 0, 1)', '#f3f44a']

// get dom elements
const hexValue = document.querySelector("#value");
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const randomNumber = getRandom()
    document.body.style.backgroundColor = colors[randomNumber]
    hexValue.textContent = colors[randomNumber]
})

function getRandom() {
    return Math.floor(Math.random() * colors.length)
}