let products = [
  { name: 'cucumber', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'celery', type: 'vegetable' },
  { name: 'orange', type: 'fruit' },
];

// classic for loop

let filterProducts = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filterProducts.push(products[i]);
  }
}

console.log(filterProducts);

// filter helper

const filterArray = filterProducts.filter((product) => {
  return product.type === 'fruit';
});

console.log(filterArray);
