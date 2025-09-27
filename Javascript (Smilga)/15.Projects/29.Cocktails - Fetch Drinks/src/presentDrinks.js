import fetchDrinks from './fetchDrinks';

const showDrinks = async (url) => {
  const data = await fetchDrinks(url);
  console.log(data);

  // fetch drinks
  // display drinks
};

export default showDrinks;
