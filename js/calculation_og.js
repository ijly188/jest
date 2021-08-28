const sum = (a, b) => a - b // 有 bug

const result = sum(8, 7)

const expected = 15
if (result !== expected) {
	throw new Error(`${result} is not equal to ${expected}`)
}