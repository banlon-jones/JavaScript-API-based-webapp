const baseURL = 'https://api.tvmaze.com';

export const getMovies = async () => {
  const response = await fetch(`${baseURL}/shows`);
  return response.json();
};

export const getMovie = async (id) => {
  const response = await fetch(`${baseURL}/shows/${id}`);
  return response.json();
};

export const countMovies = (movies) => {
  if (movies.length) {
    document.querySelector('.movie-count').innerHTML = `${movies.length}`;
  }
};
