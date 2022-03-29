const sumOfPositive = (arr) => {
  if (!arr) return 0;

  let sum = 0;
  for (let num of arr) {
    sum += (num > 0) ? num : 0;
  }
  return sum;
}

const oppNumber = (num) => {
  return (num === 0) ? 0 : -num;
}

const removeChar = (str) => {
  return str.slice(1, -1)
}

const repeatStr = (n, s) => {
  let str = '';
  for (let i = 0; i < n; i++) {
    str += s;
  }
  return str;
}

module.exports = { sumOfPositive, oppNumber, removeChar, repeatStr }
