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

/*
4. Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

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

/*
5. Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Example:
1. Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

2. Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 
Constraints:
1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.

*/
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
var removeDuplicates = function(nums) {
  // keep the iterating index (i) of unique characters.
  // We start at nums[1] cause the first number in a non-decreasing/sorted array will be unique
  // the iterating index just determines where teh next unique character goes
  // Every character after the unique characters do not matter in an in-place operation
  // return the iterating character as it gives the number of unique characters left
  
  let i = 1;
  
  for (let j = 1; j < nums.length; j++) {
      if (nums[j] !== nums[i - 1]) {
          nums[i] = nums[j]
          i++
      }
  }
  return i;
};

/*
6. Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

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

/*
7.Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

More formally check if there exists two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]

Constraints:
2 <= arr.length <= 500
-10^3 <= arr[i] <= 10^3

Example:
1. Input: arr = [10,2,5,3]
Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

2. Input: arr = [7,1,14,11]
Output: true
Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.

3. Input: arr = [3,1,7,11]
Output: false
Explanation: In this case does not exist N and M, such that N = 2 * M.
*/

var checkIfExist = function(arr) {
    for (let i = 0; i < arr.length; i++) { 
        for (let j = 0; j < arr.length; j++) {
            if (i === j) continue;
            if (arr[i]=== 2 * arr[j]) {
                return true;
            }
        }
    }
    return false
};