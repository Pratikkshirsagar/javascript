let numbers = [1, 2, 3, 4, 5];
let sum = 0;

// classic for loop
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

// reduce helper
sum = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(sum);
