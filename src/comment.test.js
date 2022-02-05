/** * @jest-environment jsdom */

import { countComments } from './comment';

test('should display comments( 14 )', () => {
  document.body.innerHTML = '<h2 id="count"></h2>';
  countComments([1, 2, 3, 4, 5, 6, 6, 7, 8, 89, 9, 0, 7, 0]);
  expect(document.querySelector('#count').innerHTML).toBe('Comments ( <span class="fig">14</span> )');
});

test('should display nothing if there are no comments', () => {
  document.body.innerHTML = '<h2 id="count"></h2>';
  countComments([]);
  expect(document.querySelector('#count').innerHTML).toBe('');
});
