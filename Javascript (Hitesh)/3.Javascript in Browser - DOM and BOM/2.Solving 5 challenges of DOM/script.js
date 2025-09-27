// example 1
document
  .getElementById('changeTextButton')
  .addEventListener('click', function () {
    let paragraph = document.getElementById('myParagraph');
    paragraph.textContent = 'the paragraph is changed';
  });

// example 2
document
  .getElementById('highlightFirstCity')
  .addEventListener('click', function () {
    let citiesList = document.getElementById('citiesList');
    citiesList.firstElementChild.classList.add('highlight');
  });

// example 3
document.getElementById('changeOrder').addEventListener('click', function () {
  let coffeType = document.getElementById('coffeeType');
  coffeType.textContent = 'Expresso';
  coffeType.style.backgroundColor = 'brown';
  coffeType.style.padding = '5px';
});

// example 4
document.getElementById('addNewItem').addEventListener('click', function () {
  let newItem = document.createElement('li');
  newItem.textContent = 'Eggs';
  document.getElementById('shoppingList').appendChild(newItem);
});

// example 5
document
  .getElementById('removeLastTask')
  .addEventListener('click', function () {
    let taksList = document.getElementById('taksList');
    taksList.lastElementChild.remove();
  });
