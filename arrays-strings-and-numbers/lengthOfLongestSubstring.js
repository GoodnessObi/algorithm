/**
 * Longest Substring Without Repeating Characters
Medium

23470

1055

Add to List

Share
Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
 */

// var lengthOfLongestSubstring = function(s) {
//   let currentLongest = [];
//   let tempArr = [];
  
//   for (let i = 0; i < s.length; i++) {
//       let current = s[i];
      
//       if (tempArr.includes(current)) {
//           if (currentLongest.length < tempArr.length) {
//               currentLongest = [...tempArr];
//           }
//           tempArr = [...tempArr.slice(tempArr.indexOf(current) + 1),current];  
//       } else {
//           tempArr.push(current);
//       }
      
//   }
  
//   return Math.max (currentLongest.length, tempArr.length);
// };

var lengthOfLongestSubstring = function(s) {
  let currentLongest = [];
  let tempArr = [];
  
  for (let i = 0; i < s.length; i++) {
      let current = s[i];
      let currentIndex = tempArr.indexOf(current);
      
      if (currentIndex > -1) {
          if (currentLongest.length < tempArr.length) {
              currentLongest = [...tempArr];
          }
          tempArr = [...tempArr.slice(currentIndex + 1),current];  
      } else {
          tempArr.push(current);
      }
      
  }
  
  return Math.max (currentLongest.length, tempArr.length);
};