// classic for loop
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers);

// Map helper

const doubled = numbers.map((number) => {
  return number * 2;
});

console.log(doubled);
