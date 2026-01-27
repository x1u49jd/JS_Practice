/*

Task: Minimum sum subarray of size K

You are given:

an array of integers A

an integer K

👉 Return the smallest sum of any K consecutive elements.

Example
A = [2, 1, 5, 1, 3, 2]
K = 3


Windows of size 3:

[2, 1, 5] → sum = 8
[1, 5, 1] → sum = 7
[5, 1, 3] → sum = 9
[1, 3, 2] → sum = 6  ← smallest


✅ Return: 6

🔑 Hints (don’t skip these)

First, compute the sum of the first K elements

Store it as both:

windowSum

minSum

Slide the window:

subtract the element leaving the window

add the new element entering

Update minSum using Math.min(...)

🧠 What stays the same from last time

✔ same window logic
✔ same windowSum = windowSum - A[i-K] + A[i]
✔ same loop structure

Only the comparison changes (min instead of max)

*/

A = [2, 1, 5, 1, 3, 2]
K = 3

function solution(A,K) {
  
  let windowSum = 0
  
  //first window
  for(let i = 0; i < K; i++){
    windowSum = windowSum + A[i]
  }
  
  let minSum = windowSum
  
  //shifting window
  for (let i = K; i < A.length; i++){
    windowSum = windowSum - A[i - K] + A[i]
    
    minSum = Math.min(windowSum, minSum)
  }
  
  return minSum
}

console.log(solution(A,K))


// TIme Complexity: O(N) because we iterate through the array A once
// Space Complexity: O(1) because we only use a constant amount of space