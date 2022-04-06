/* 
1. Given a binary array nums, return the maximum number of consecutive 1's in the array.
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

/*
2. Given an array nums of integers, return how many of them contain an even number of digits.
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

/*
3. Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
 

Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
*/
var sortedSquares = function(nums) {
  const sortedArr = [];
  for (num of nums) {
      sortedArr.push(num * num);
  }
  return sortedArr.sort(function(a, b) {
    return a - b;
  })
};

/*
3. Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

Example:
1. Input: arr = [8,4,5,0,0,0,0,7]
[1,0,2,3,0,4,5,0]
Output: [8,4,5,0,0,0,0,0]
[1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [8,4,5,0,0,0,0,0] and [1,0,0,2,3,0,0,4]

2. Input: arr = [1,2,3]
Output: [1,2,3]
Explanation: After calling your function, the input array is modified to: [1,2,3]
 
Constraints:
1 <= arr.length <= 104
0 <= arr[i] <= 9
*/
 var duplicateZeros = function(arr) {
  //keep track of possible 0 duplocations possible
  let possibleDups = 0;
  //keep track of the last Index so length-1
  let lastIndex = arr.length -1;
  
// this loop is to get the determine what the items on the array that needs to be dropped off for the array to manintain the exact same length after duplication
// we loop through the array increasing the value of possibleDups for every zero found
  for (let i = 0; i <= (lastIndex - possibleDups); i++) {
      if (arr[i] === 0) {
          //to handle the edge case where the 0 has to be included in the array but cannot be replicated cause we have no more space.
          if (i === (lastIndex- possibleDups)) {
              //we copy this zero without deuplicating it hence the break with no increase in possibleDups and reducing the lastIndex length
              arr[lastIndex] = 0;
              lastIndex -=1;
              break;
          }
          possibleDups++;
      }
  }
      
  //this does a shift and copy. copy zero twicw and non-zero once
  //for the edge case, its index isnt factored into newlength and it remanins in fixed as teh last item in the array
      let newLength = lastIndex - possibleDups;
  for (i = newLength; i >= 0; i--) {
      if (arr[i] === 0) {
          arr[i + possibleDups] = 0;
          possibleDups--;
          arr[i + possibleDups] = 0;
      } else {
          arr[i + possibleDups] = arr[i];
      }
  }
};

