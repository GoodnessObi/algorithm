/*
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

Example:
1. Input: arr = [2,1]
Output: false

2. Input: arr = [3,5,5]
Output: false

3. Input: arr = [0,3,2,1]
Output: true

Other test cases:
[2,0,2]
[0,1,2,3,4,5,6,7,8,9]
Constraints:
1 <= arr.length <= 104
0 <= arr[i] <= 104
*/

// const arr = [0,3,2,1]
var validMountainArray = function(arr) {
  // find the highest number - the first decrease after a number
  // after highest number, arr items should decrease
  const arrLength = arr.length;
  let topIndex;
  if (arrLength < 3) {
    return false
  }
  
  for (let i = 0; i < arrLength; i++) {
    if ( i === arrLength - 1 || arr[i] >= arr[i + 1]) {
      return false;
    } else if (arr[i] < arr[i + 1] && arr[i + 1] > arr[i + 2]) {
      topIndex = i + 1;
      break;
    }
  }
  
  for (let i = arrLength - 1; i > topIndex ; i--) {
    if (arr[i] >= arr[i -1]) {
      return false
    }
  }
  return true;
};