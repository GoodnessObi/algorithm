/*
Given an array nums of integers, return how many of them contain an even number of digits.
Constraints: 
1 <= nums.length <= 500
1 <= nums[i] <= 105
*/
var findNumbers = function(nums) {
  /* loop through each number and divide by 10 till the result is less than 1 = 0.9
  the number of times looped through is the count of the number
  if the number of times looped through is divisible by 2, it is even
  nums = [555,901,482,1771]
  nums = [12,345,2,6,7896]
  */
  let evenCount = 0;
  
  for ( let i = 0; i < nums.length; i++ ) {
      let value = nums[i];
      let digitCount = 0
      while (value >= 1) {
          value = value/10
          digitCount++
      }
      if ( digitCount % 2 == 0 ) evenCount++
  }
  return evenCount;
};

var findNumbers = function(nums) {
  /* loop through each number and divide by 10 till the result is less than 1 = 0.9
  the number of times looped through is the count of the number
  if the number of times looped through is divisible by 2, it is even
  nums = [555,901,482,1771]
  nums = [12,345,2,6,7896]
  */
  let evenCount = 0;
  
  for ( let i = 0; i < nums.length; i++ ) {
      const digitCount = nums[i].toString().length;
      if ( digitCount % 2 == 0 ) evenCount++
  }
  return evenCount;
};