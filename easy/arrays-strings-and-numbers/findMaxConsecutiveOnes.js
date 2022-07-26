/* 
Given a binary array nums, return the maximum number of consecutive 1's in the array.
Constraints:
1 <= nums.length <= 105
nums[i] is either 0 or 1.
*/

var findMaxConsecutiveOnes = function(nums) {
  /* keep track of the count when it is 1 */
  count = 0;
  /* when it hits 0, compare the present count with the last count and keep the higher value */
  maxCount = 0;
  
  for ( let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
          count++
      } else {
          maxCount = Math.max(maxCount, count)
          count = 0
      }
  }
  return Math.max(maxCount, count)
};

const nums = [1,1,0,1,1,1];

console.log(findMaxConsecutiveOnes(nums));