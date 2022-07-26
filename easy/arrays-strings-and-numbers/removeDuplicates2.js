/*
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Example:
1. Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

2. Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 
Constraints:
1 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.

*/
// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
var removeDuplicates = function(nums) {
  //initialize the counter
  let i = 1;
  
  //Start from the second element and process elements one by one
  for (let j = 1; j < nums.length; j++) {
    //left condition: if current element is the second duplicate;
    //right condition: if the current element is the first of its kind
    //really these are the two conditions needed
      if (((nums[j] === nums[i - 1]) && (nums[j] !== nums[i - 2])) || (nums[j] !== nums[i - 1])) {
          //overwrite the element at index/counter i

          // nums[i] = nums[j]
          // i++
          nums[i++] = nums[j]
      }
  }
  return i;
};

//alternate
var removeDuplicates = function(nums) {
  // Initialize the counter and the second pointer.
  let j = 1;
  let count = 1
   
  // Start from the second element of the array and process
  // elements one by one.
  for (let i = 1; i < nums.length; i++) {
    // If the current element is a duplicate, increment the count.
    if (nums[i] === nums[i - 1]) {
      count++
    } else {
      // Reset the count since we encountered a different element
      // than the previous one.
      count = 1
    }
    
    // For a count <= 2, we copy the element over thus
    // overwriting the element at index "j" in the array
    if (count <= 2) {
      nums[j++] = nums[i]
    }
  }
  return j;
};