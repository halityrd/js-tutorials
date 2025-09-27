// tag selector
document.getElementsByTagName("li");
document.getElementsByTagName("li")[2].style.color = "purple";

// class selector
document.getElementsByClassName("btn");
document.getElementsByClassName("btn")[0].style.color = "red";

// id selector
document.getElementById("title");
document.getElementById("title").innerHTML = "Good Bye";

// css selector
// tek değer döndürür
// seviyede aynı elemanlar var ise ilkini döndürür
document.querySelector("h1");
document.querySelector("#title");
document.querySelector(".btn");
document.querySelector("li a");
document.querySelector("li.item");
document.querySelector("#list a");
document.querySelector("li a").style.color = "red";


// css selector all
// tüm değerleri döndürür
document.querySelectorAll("#list .item");
document.querySelectorAll("#list .item")[2].style.color = "blue";