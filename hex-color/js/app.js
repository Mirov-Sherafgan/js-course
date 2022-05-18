const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F'];
// #ffffff - 6 Symbols
const value = document.getElementById('value');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandom()]
    }
    document.body.style.backgroundColor = hexColor;
    value.textContent = hexColor
})

function getRandom() {
    return Math.floor(Math.random() * hex.length)
}
