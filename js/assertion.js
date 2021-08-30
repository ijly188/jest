const { sum, subtract } = require('./calculation');
const { test } = require('./framework');

// let result, expected;

// result = sum(8, 7);
// expected = 15;
// if (result !== expected) {
//   throw new Error(`${result} is not equal to ${expected}`);
// }

// result = subtract(8, 7);
// expected = 1;
// if (result !== expected) {
//   throw new Error(`${result} is not equal to ${expected}`);
// }

// const result = sum(8, 7)
// const expected = 15
// expect(result).toBe(expected) // 變成易讀的 assertion

function expect(result) {
  return {
    toBe(expected) {
      if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    },
  };
}

// 同步區
test('同步區 add numbers', () => {
  const result = sum(8, 7);
  const expected = 15;
  expect(result).toBe(expected);
});

test('同步區 subtract numbers', () => {
  const result = subtract(8, 7);
  const expected = 1;
  expect(result).toBe(expected);
});

// 非同步區
test('非同步區 add numbers', async () => {
  const result = await sum(8, 7);
  const expected = 15;
  expect(result).toBe(expected);
});
test('非同步區 subtract numbers', async () => {
  const result = await subtract(8, 7);
  const expected = 1;
  expect(result).toBe(expected);
});

module.exports = {
  expect,
};
