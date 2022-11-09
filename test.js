

const select = document.querySelector ("select");
const message = document.querySelector ("p");

function weather() {
    const choice = select.value;

    if (choice === "summer") {
        message.textContent = "It's summer, lets go to the beach."
    } else {
        message.textContent = "It's winter, no need."
    } 
}
select.addEventListener ("change", weather);

const response = document.querySelector ("h1");
