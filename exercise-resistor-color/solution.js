// first of all, write a function
// which takes a color (String)
// and return corresponding number (Number)

// console.log(colorCode['black']);
// function colorCode(color) {
//   var COLOR_CODE = {
//     black: 0,
//     brown: 1,
//     red: 2,
//     orange: 3,
//     yellow: 4,
//     green: 5,
//     blue: 6,
//     voilet: 7,
//     grey: 8,
//     white: 9
//   };
//   return COLOR_CODE[color];
// }
// console.log(colorCode('black'));

// Can we do this with "Array"?
var COLOR_CODE = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'voilet',
  'grey',
  'white'
];
// input: color
// output: number
function colorCodeArray(inputColor) {
  // iterate over the COLOR_CODE array
  for (var i = 0; i < COLOR_CODE.length; i++) {
    // if the current element is the input color
    if (COLOR_CODE[i] === inputColor) {
      // output the index
      return i;
    }
  }
}
console.log(colorCodeArray('black'));
console.log(colorCodeArray('grey'));
