const baseURL = 'https://api.tvmaze.com';

export const getMovies = async () => {
  const response = await fetch(`${baseURL}/shows`);
  return response.json();
};

export const getMovie = async (id) => {
  const response = await fetch(`${baseURL}/shows/${id}`);
  return response.json();
};

export const counter = async () => {
  const movies = await getMovies();
  return movies.length;
};
