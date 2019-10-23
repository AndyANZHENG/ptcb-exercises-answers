// isNaN() => if the input is a number

function multiplyNumber(number) {
  // TODO
  if (isNaN(number) || number <= 0) {
    return 'ERROR';
  }
  if (number >= 1000000) {
    return number;
  }
  while (number < 1000000) {
    number = number * 10;
  }
  return number;
}

// tests
console.log(multiplyNumber('Hello'));
console.log(multiplyNumber(2000000));
console.log(multiplyNumber(10)); // expect to be: 1000000
console.log(multiplyNumber(66)); // expect to be: 6600000
