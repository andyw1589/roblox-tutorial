const rightButtons = document.getElementsByClassName("right-answer");
const wrongButtons = document.getElementsByClassName("wrong-answer");

for (let i = 0; i < rightButtons.length; i++) {
    let button = rightButtons[i];
    button.onclick = () => {
        button.style.background = "green";
        button.style.borderColor = "green";
        button.style.color = "white";
    };
}

for (let i = 0; i < wrongButtons.length; i++) {
    let button = wrongButtons[i];
    button.onclick = () => {
        button.style.background= "red";
        button.style.borderColor = "red";
        button.style.color = "white";
    };
}