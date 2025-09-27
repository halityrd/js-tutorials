function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve({ name: 'chaicode', url: 'https://chaicode.com' });
      reject({ name: 'chaicode', url: 'https://chaicode.com' });
    });
  });
}

async function getUserData() {
  try {
    console.log('Fething user data...');
    const userData = await fetchUserData();
    console.log('User data fetched successfully');

    console.log('User data: ', userData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

getUserData();
