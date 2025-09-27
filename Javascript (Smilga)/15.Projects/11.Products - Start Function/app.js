const url = 'https://course-api.com/javascript-store-products';

const productsDOM = document.querySelector('.products-center');

const fethProducts = async () => {
  productsDOM.innerHTML = '<div class="loading"></div>';
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML = '<p class="error">there was an error</p>';
  }
};

const displayProducts = (list) => {
  console.log(list);
};

const start = async () => {
  const data = await fethProducts();
  displayProducts(data);
};

start();
