var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

var img1 = document.querySelector(".dice .img1");
img1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var img2 = document.querySelector(".dice .img2");
img2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

var h1 = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    h1.innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    h1.innerHTML = "🚩 Play 2 Wins!";
}
else {
    h1.innerHTML = "Draw";
}