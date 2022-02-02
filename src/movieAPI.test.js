/** * @jest-environment jsdom */
import { counter } from './movieAPI';

global.fetch = jest.fn(() => Promise.resolve(
  {
    json: () => Promise.resolve(new Array(240)),
  },
));

describe('Testing items count', () => {
  document.body.innerHTML = '<div></div>';
  it('item count should be 240', async () => {
    const count = await counter();
    expect(count).toBe(240);
  });
});
