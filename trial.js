let arr = [1, 2, 3, 564546];
let sum = 0;

const asyncAwait = async () => {
  try {
    let promise = new Promise((resolve, reject) => {
      if (arr.length < 3) reject("Array length is less than 3");

      for (let val = 0; val < arr.length; val++) {
        sum = sum + arr[val];
      }
      resolve(`sum is: ${sum}`);
    });

    // Corrected the call to await promise
    const output = await promise;
    console.log(output);
  } catch (error) {
    console.log("Error:", error);
  }
};

asyncAwait();
