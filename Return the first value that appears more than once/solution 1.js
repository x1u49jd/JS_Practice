/*

Problem statement

Write a function:

function solution(A);


that, given an array A of integers, returns the first value that appears more than once, where “first” means the earliest second occurrence in the array.

If no value is repeated, return -1.

Key points

You scan the array from left to right

The moment a value appears for the second time, you return it

You do not look for:

the smallest value

the most frequent value

Only the earliest second appearance matters

Examples
[2, 1, 3, 5, 3, 2]  → 3
[1, 2, 3, 4]       → -1
[5, 1, 5, 1]       → 5

What this exercise trains

Using a Set / Map

Detecting duplicates efficiently

Early loop termination

Understanding return vs break

Writing O(N) solutions

*/

A = [5, 1, 5, 1]

function solution(A) {
  
  let repeat = new Set();
  
  for (let i = 0; i < A.length; i++){
    if (repeat.has(A[i])){
      return A[i]
    }
    else {
      repeat.add(A[i])
    }
    
  }
  
  return -1  
}

console.log(solution(A))

// Time Complexity: 0(N): because we iterate through the array once
// Space Complexity: O(N): because we store the number of elements that we have in the A array