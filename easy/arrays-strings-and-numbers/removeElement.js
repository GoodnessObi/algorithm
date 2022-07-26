/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Example:
1. Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

2. Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
 
Constraints:
1 <= arr.length <= 104
0 <= arr[i] <= 9
*/
var removeElement = function(nums, val) {
  //find the position of val
  //shift all items in the array to the left from that index
  //return nums.length
  let toMove;
  const shiftTo = i => {
      for (let j = i + 1; j < nums.length; j++) {
          nums[j-1] = nums[j];
      }
      nums.pop();
  }

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === val) {
          shiftTo(i);
          i--
      }
  }

  return nums.length;
}

var removeElement = function(nums, val) {
  let n = 0;
  for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== val) {
          nums[n] = nums[j]
          i++;
      }
  }
  return n;
}