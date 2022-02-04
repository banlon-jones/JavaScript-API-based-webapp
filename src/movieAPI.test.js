/** * @jest-environment jsdom */
import { countMovies } from './movieAPI';

test('should display nothing if there are no movies', () => {
  document.body.innerHTML = '<h2 class="movie-count"></h2>';
  countMovies([1, 2, 3, 4, 5, 6, 6, 7, 8, 89, 9, 0, 7, 0]);
  expect(document.querySelector('.movie-count').innerHTML).toBe('14');
});

test('should display nothing if there are no movie', () => {
  document.body.innerHTML = '<h2 class="movie-count"></h2>';
  countMovies([]);
  expect(document.querySelector('.movie-count').innerHTML).toBe('');
});
