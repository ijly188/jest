const { sum, subtract, sumAsync, subtractAsync } = require('./calculation')

test('add numbers', () => {
  const result = sum(8, 7);
  const expected = 15;
  expect(result).toBe(expected);
});
test('subtract numbers', () => {
  const result = subtract(8, 7);
  const expected = 1;
  expect(result).toBe(expected);
});
test('add numbers async', async () => {
  const result = await sumAsync(8, 7);
  const expected = 15;
  expect(result).toBe(expected);
});
test('subtract numbers async', async () => {
  const result = await subtractAsync(8, 7);
  const expected = 1;
  expect(result).toBe(expected);
});