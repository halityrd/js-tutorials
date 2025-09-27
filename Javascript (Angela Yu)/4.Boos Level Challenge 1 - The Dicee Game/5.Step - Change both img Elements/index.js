var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

var img1 = document.querySelector(".dice .img1");
img1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var img2 = document.querySelector(".dice .img2");
img2.setAttribute("src", "images/dice" + randomNumber2 + ".png");