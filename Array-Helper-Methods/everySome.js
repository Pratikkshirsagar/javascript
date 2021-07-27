const computers = [
  { name: 'Apple', ram: 16 },
  { name: 'lenovo', ram: 4 },
  { name: 'acer', ram: 24 },
];

let allCouputersCanRunProgram = true;
let onlySomeCanRunProgram = false;

// classic for loop

for (let i = 0; i < computers.length; i++) {
  if (computers[i].ram < 16) {
    allCouputersCanRunProgram = false;
  } else {
    onlySomeCanRunProgram = true;
  }
}

console.log(allCouputersCanRunProgram);
console.log(onlySomeCanRunProgram);

// Every and Some helper

allCouputersCanRunProgram = computers.every((computer) => {
  return computer.ram > 16;
});

onlySomeCanRunProgram = computers.some((computer) => {
  return computer.ram > 16;
});

console.log(allCouputersCanRunProgram);
console.log(onlySomeCanRunProgram);
