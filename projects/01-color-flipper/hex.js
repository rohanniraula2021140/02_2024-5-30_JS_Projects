const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
console.log(color);


btn.addEventListener('click', function() {
    let hexColor = "#";
    for (let index = 0; index < 6; index++) {
        hexColor += hex[getRandomNumber(hex.length)];
    }
    // console.log(color);
    console.log(hexColor);
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;

})


function getRandomNumber(finalNumber) {
    return Math.floor(Math.random() * finalNumber);
}

