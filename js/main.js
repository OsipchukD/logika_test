const first = [1, 3, 3, 4, 6, 5, 4];
const second = [6, 3, 5, 2, 2];

let listOfNumbers = [];

function numbers() {
  for (const number of first) {
    if (!second.includes(number)) {
      if (!listOfNumbers.includes(number)) {
        listOfNumbers.push(number);
      }
    }
  }
  for (const number of second) {
    if (!first.includes(number)) {
      if (!listOfNumbers.includes(number)) {
        listOfNumbers.push(number);
      }
    }
  }
  listOfNumbers.sort();
}

numbers();

console.log(listOfNumbers);

// Implement a logic that finds difference between "first" and "second" lists
// and prints the result to the console:
// [1, 2, 4]
