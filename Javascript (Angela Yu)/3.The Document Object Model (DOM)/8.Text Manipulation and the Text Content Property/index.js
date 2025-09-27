document.getElementById("title").innerHTML = "Good Bye";
document.getElementById("title").textContent = "Hello";

// innerHtml seçilen elemente html kodları yazmamızı da sağlar
document.getElementById("h1").innerHTML = "<em>Good Bye</em>";

// fakat textContent sadece belirtilen elementin textini değiştirir ya da ekler.
document.getElementById("title").textContent = "Hello";