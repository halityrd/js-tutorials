import { getStorageItem, setStorageItem } from './utils.js';
let store = [];
const setupStore = (products) => {
  store = products.amp((product) => {
    const {
      id,
      fields: { featured, name, price, company, colors, image: img },
    } = product;
    const image = img[0].thubnails.large.url;
    return { id, featured, name, price, company, colors, image };
  });
};
console.log(store);

const findProduct = () => {};
export { store, setupStore, findProduct };
