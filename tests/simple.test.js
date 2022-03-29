const forTest = require('../src/tasks')

test('Tests for positive sum', () => {
  expect(forTest.sumOfPositive([1,2,3,4,5])).toBe(15);
  expect(forTest.sumOfPositive([1,-2,3,4,5])).toBe(13);
  expect(forTest.sumOfPositive()).toBe(0);
  expect(forTest.sumOfPositive([-1,-2,-3,-4,-5])).toBe(0);
  expect(forTest.sumOfPositive([-1,2,3,4,-5])).toBe(9);
  expect(forTest.sumOfPositive([-39,17,-41,20,62,-52,30,-44,21,95,6,35,6,-21,75,-44,81,74,98,71,80,33,-12,-54,-12,92,13,-69,-100,-80,-90,-96,-18,-22,11,34,19,71,-61,57,2,75,69,-13,48,5,-60,-2,-29,-70,-89,15,-44,-69,-85,42,77,38,25,7,-24,-37,-72,48,-36,1,-81,86,42,-56,-63,61,-76,-82,13,-22,-52,-58,86,49,73,93,-41,-84,-28,-5,-61,-60,52,16,-81,25,-78,83,2,-33,87,18,-29,47,0,7,40,54,-73,-38,-19,-47,61,97,99,-67,50,39,2,-6,67,-7,-51,55])).toBe(2957)
})

test('Tests for Opposite number', () => {
  expect(forTest.oppNumber(1)).toBe(-1);
  expect(forTest.oppNumber(-1)).toBe(1);
  expect(forTest.oppNumber(0)).toBe(0);
  expect(forTest.oppNumber(-1123)).toBe(1123);
  expect(forTest.oppNumber(1123)).toBe(-1123);
})

test('Tests for Remove char', () => {
  expect(forTest.removeChar('eloquent')).toBe('loquen');
  expect(forTest.removeChar('country')).toBe('ountr');
  expect(forTest.removeChar('person')).toBe('erso');
  expect(forTest.removeChar('place')).toBe('lac');
  expect(forTest.removeChar('ooopsss')).toBe('oopss')
})
