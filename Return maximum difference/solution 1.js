
/*

🧩 Exercise: Maximum Difference
Problem statement

Write a function:

function solution(A);


that, given an array A of integers, returns the maximum value of

A[j] - A[i]


such that:

j > i (the second element comes after the first in the array)

If no positive difference exists, return -1.

What this means in plain words

Pick two different elements from the array

The second one must come later

Subtract the earlier value from the later value

Find the largest possible result

Think of it as:

“What is the biggest upward jump from an earlier number to a later number?”

Examples
[2, 3, 10, 6, 4, 8, 1] → 8
// 10 - 2

[7, 9, 5, 6, 3, 2] → 2
// 9 - 7

[10, 8, 6, 4] → -1
// always going down

Important rules

❌ You must not sort the array

❌ You must not use nested loops

✅ You scan the array once, from left to right

✅ Track the smallest value seen so far

✅ Track the maximum difference found

What this exercise trains

Reading and respecting constraints (j > i)

Loop boundaries

One-pass (O(N)) thinking

Avoiding common logical mistakes

Turning a “pair problem” into a running minimum problem

*/


A = [10, 8, 6, 4]



function solution(A){
  
  let smallest = A[0]
  let difference = -1
  
  for (let i = 1; i < A.length; i++) {
    let currentDifference = A[i] - smallest
    
    if (currentDifference > difference) {
      
      difference = currentDifference
      
    }
    
    if (A[i] < smallest) {
      smallest = A[i]
    }
  }
  
  return difference
}


console.log(solution(A))

// Time Complexity : O(N) because we iterate through the array once
// Space Complexity: O(1) beacause we use a variable to store the final result of the solution