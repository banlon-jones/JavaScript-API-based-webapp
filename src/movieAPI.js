const baseURL = 'https://api.tvmaze.com';

const getMovies = async () => {
  const response = await fetch(`${baseURL}/shows`);
  return response.json();
};

export default getMovies;
