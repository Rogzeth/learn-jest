const lastTest = require('../src/tasks')

test('it\'s last test', () => {
  expect(lastTest.repeatStr(3, "*")).toBe("***");
  expect(lastTest.repeatStr(5, "#")).toBe("#####");
  expect(lastTest.repeatStr(2, "ha ")).toBe("ha ha ");
})
