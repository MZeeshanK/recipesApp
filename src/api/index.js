import axios from 'axios';

const getRecipesList = async (tags = null, size) => {
  const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {
      from: 0,
      size: size || 20,
      tags,
    },
    headers: {
      'X-RapidAPI-Key': 'e5882fd351msh7f8274a61b4c7f6p1b5f14jsndf1367d727ad',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
  };

  return await axios.request(options);
};

export { getRecipesList };
