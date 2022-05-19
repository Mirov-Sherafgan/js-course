// set initial value
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");


buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const styles = event.currentTarget.classList;
        if (styles.contains('decreste')) {
            count--
        }
        else if (styles.contains('increase')) {
            count++
        }
        else {
            count = 0
        }

        value.style.color = count > 0 ? 'green' : count < 0 ? 'red' : '#222'

        value.textContent = count
    })
})