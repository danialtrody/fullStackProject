function firstInteraction() {
    alert("Hey, it's the first interaction with JS!");
}
firstInteraction();

const buttonJS = document.querySelector(".btn-primary");

if (buttonJS) {
    buttonJS.addEventListener('click', function() {
        changeColor();
    });
}

function changeColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    buttonJS.style.backgroundColor = randomColor;
}
