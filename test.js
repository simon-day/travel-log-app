// Definition for a Node.
var sortByBits = function(arr) {
  let convertedNums = [];

  const countOnes = binaryNum => {
    let count = 0;
    return binaryNum
      .split('')
      .reduce((tot, n) => (n === '1' ? tot + 1 : tot + 0), 0);
  };

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    console.log('num: ', num);
    const num1sCount = countOnes(num.toString(2));
    console.log('num1sCount: ', num1sCount);
  }

  console.log(convertedNums);
};

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8])); // [0,1,2,4,8,3,5,6,7]
