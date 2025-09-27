const url = 'https://course-api.com/javascript-store-products';

const productsDOM = document.querySelector('.products-center');

const fethProducts = async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fethProducts();
