const users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' },
  { name: 'Tim' },
];

let user;

// classic for loop
for (let i = 0; i < users.length; i++) {
  if (users[i].name === 'Alex') {
    user = users[i];
    break;
  }
}

console.log(user);

// find helper
user = users.find((user) => {
  return user.name === 'Alex';
});

console.log(user);
