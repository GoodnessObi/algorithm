/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

var isValid = function(s) {
  let closeMap = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
  };
  
  let openStack = []

  for (let i = 0; i < s.length; i++) {
    let key = s[i]
    let topItem = openStack[openStack.length - 1]
    
    if (closeMap.hasOwnProperty(key)) {
        openStack.push(key)
    } else if (s[i] === closeMap[topItem]) {
        openStack.pop()
    } else {
        return false;
    }   
  }
  return !openStack.length;
};

isValid('(((((((()');
isValid('(((((())))))');
isValid('()[]{}');
isValid('()');