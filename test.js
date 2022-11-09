

const select = document.querySelector ("select");
const message = document.querySelector ("h1");
select.addEventListener ("change", weather);

function weather() {
    const choice = select.value;

    if (choice === "summer") {
        message.textContent = "It's summer, lets go to the beach."
    } else {
        message.textContent = "It's winter, no need."
    } 
} 

const chose = document.getElementById ("relate")
const response = document.querySelector ("h2");
chose.addEventListener ("change", relationshipStatus);

function relationshipStatus() {
    const relationship = chose.value;
    if (relationship === "married") {
        response.textContent = "You're a responsible person."
    } else if (relationship === "divorced") {
        response.textContent = "Na so life be, no be you kill am."
    } else {
        response.textContent = "You're not yet responsible my dear!"
    }
}
