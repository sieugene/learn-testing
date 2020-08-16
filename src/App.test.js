const { sum, total } = require("./App")

const add = jest.fn(() => 3)

//Unit test
test('should be sum', () => {
  const value = sum(1,2)
  expect(value).toBe(3);
})
test('mocks fn', () => {
  expect(add(2,5)).toBe(3);
  expect(add).toHaveBeenCalledTimes(1)
})

//Integration test
test('should calc total', () => {
  expect(total(2,5)).toBe("7 rub")
})

