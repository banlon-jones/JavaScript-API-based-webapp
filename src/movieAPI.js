const baseURL = 'https://api.tvmaze.com';

export const getMovies = async() => {
  const response = await fetch(`${baseURL}/shows`);
  return await response.json();
}
