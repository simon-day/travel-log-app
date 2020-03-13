// Definition for a Node.
var arrayMaxConsecutiveSum = function(arr) {
  let maxSum = arr[0];
  let currentSum = maxSum;

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i] + currentSum, arr[i]);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
};

console.log(arrayMaxConsecutiveSum([4, -20, -2, 2, 4, -4, 0, -11, 6])); // 7
