//  Lets say we have an array which has repeated elements.
// Task is to show the count of each elements
const arr = [1, 2, 3, 4, 5, 67, 4, 3, 2, 4, 3, 2, 2, 2, 2, 2];

// Create an object
const obj = {};

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]]) obj[arr[i]] += 1;
  else obj[arr[i]] = 1;
}
console.log("the count of each element is as follows: ", obj);
