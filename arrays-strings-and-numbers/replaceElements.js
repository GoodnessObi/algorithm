/*
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

 

Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
Explanation: 
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.
Example 2:

Input: arr = [400]
Output: [-1]
Explanation: There are no elements to the right of index 0.
 

Constraints:

1 <= arr.length <= 104
1 <= arr[i] <= 105
*/
// input = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]
// input = [57010,40840,69871,14425,70605];
// output = [70605,70605,70605,70605,-1]
var replaceElements = function(arr) {
  let item;
  let presentItem;
  for (let i = arr.length - 1; i > -1; i--) {
              
      if (i === arr.length - 1) {
          item = arr[i];
          arr[i] = -1;
          continue;
      }
      
      if (i === arr.length - 2) {
          presentItem = arr[i];
          arr[i] = item;
          if (item < presentItem) {
              item = presentItem;
          }
          continue;
      }
      
      if (arr[i] < item) {
          arr[i] = item;
      } else {
          presentItem = arr[i];
          arr[i] = item;
          item = presentItem;
      }
  
  }
  return arr;
};
