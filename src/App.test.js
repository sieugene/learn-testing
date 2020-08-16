const { sum, total } = require("./App")

test('should be sum', () => {
  const value = sum(1,2)
  expect(value).toBe(3);
  
})

test('should calc total', () => {
  expect(total(2,5)).toBe("7 rub")
})

