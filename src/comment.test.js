/** * @jest-environment jsdom */
import {countComments} from './involvementAPI';

global.fetch = jest.fn(() => Promise.resolve(
  {
    json: () => Promise.resolve(new Array(3)),
  },
));

describe('Testing comment count', () => {
  document.body.innerHTML = '<div></div>';
  it('Comments count should be 7', async () => {
    const count = await countComments();
    expect(count).toBe(3);
  });
});
