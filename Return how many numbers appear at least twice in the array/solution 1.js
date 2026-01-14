/*

Task: Count numbers that appear more than once

Problem Statement:

You are given an array of integers A.
Return how many numbers appear at least twice in the array.

Use a count object to track occurrences.

Only count distinct numbers (don’t count duplicates multiple times).

Examples

Example 1

A = [1, 2, 2, 3, 3, 3, 4]


2 appears twice → counts as 1

3 appears three times → counts as 1

1 and 4 appear once → ignore

Return: 2 (numbers 2 and 3)

Example 2

A = [5, 5, 5, 5]


Only 5 appears (4 times → counts as 1)

Return: 1

Example 3

A = [1, 2, 3, 4]


No number appears more than once

Return: 0

Requirements / Hints

Use a count object to store how many times each number appears.

After counting, loop over the count object and count the keys with value >= 2.

If you want, I can also give a skeleton code to get started so you can focus on practicing the count object.

Do you want me to do that?

*/


A = [1, 2, 2, 3, 3, 3, 4]

function solution(A){
 
let count = {}
let twiceCount = 0

 //count occurances
 for (let i = 0; i < A.length; i++){
   let num = A[i]
   
   if (!count[num]){
     count[num] = 1
   }
   else {
     count[num]++
   }
   
 }
 
 for (let key in count){
   if (count[key] >= 2){
     twiceCount++
   }
 }
 
 return twiceCount
}

console.log(solution(A));

// Time Complexity: O(N) because we loop through the array once and then loop through the count object
// Space Complexity: O(N) because of the count object that becomes size of N in worst case