let arr = [1, 2, 3, 564546];
let sum = 0;

let promise = new Promise((resolve, reject) => {
  if (arr.length < 3) reject("Array length is less than 3");

  for (let val = 0; val < arr.length; val++) {
    sum = sum + arr[val];
  }
  resolve(`sum is: ${sum}`);
});

promise.then((result) => console.log(result)).catch((err) => console.log(err));
