/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
 

Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
*/
const nums = [-4,-1,0,3,10];
var sortedSquares = function(nums) {
  const sortedArr = [];
  for (num of nums) {
      sortedArr.push(num * num);
  }
  return sortedArr.sort(function(a, b) {
    return a - b;
  })
};