//Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
var array = [3, 8, 5, 6, 5, 7, 1, 9];
var outputArray = [];

function arrayTrim() {
  var sortedArray = array.sort();
  console.log(sortedArray);
  outputArray.push(sortedArray[1], array[array.length - 2]);
  return outputArray;
}

console.log(arrayTrim());

/*
===trim===
The trim() method removes whitespace from both sides of a string.

*/
