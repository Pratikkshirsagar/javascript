// classic for loop
let colors = ['red', 'blue', 'green'];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// es6 forEach
colors.forEach((color) => {
  console.log(color);
});

// example 2
let numbers = [1, 2, 3, 4, 5];

let sum = 0;

numbers.forEach((number) => {
  sum += number;
});

console.log(sum);
