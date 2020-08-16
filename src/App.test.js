const { sum } = require("./App")

test('should be sum', () => {
  const value = sum(1,2)
  expect(value).toBe(3);
  
})

