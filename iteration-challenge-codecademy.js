// Define a callback function before you use it in a iterator.

const foods = ['carrot', 'apple', 'pineapple', 'pear', 'fish', 'candy'];

const longFood = food => food.length > 6;
//should return only pineapple

console.log(foods.filter(longFood));

// Chain two iteration methods on the same array.

console.log(foods.filter(longFood).forEach(word => {
  console.log("This is a long food: " + word);
}));

// Use the optional arguments in an iterator to include the index or the entire array.
// What? I don't know what this means


// Use .reduce() to take a multi-layered array and return a single layer array from scratch.

const multiLayeredArray = [ [1,2,3], [4,5,6], [7,8,9]]

const singleLayeredArray = []


for (let i = 0; i < multiLayeredArray.length; i++){
  singleLayeredArray.push(multiLayeredArray[i].reduce((accumulator, storedValue) => {
      return accumulator + storedValue;
    }
  ))
}

console.log(singleLayeredArray);

// This does not work

// const reduceMulti = nestedArray => {
//   nestedArray.reduce((accumulator, storedValue) => {
//       return accumulator + storedValue;
//     }
//   )
// };

// multiLayeredArray.forEach(reduceMulti => {
//   singleLayeredArray.push(reduceMulti);
// })

// console.log(singleLayeredArray);
