const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

let result = sum(8, 7);
let expected = 15;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

result = subtract(8, 7);
expected = 1;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
