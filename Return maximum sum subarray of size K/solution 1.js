/*

🧠 Task: Maximum sum subarray of size K

Problem statement (as if you were starting fresh):

You are given an array of integers A and an integer K.
Find the maximum sum of any K consecutive elements in the array.

Example
A = [2, 1, 5, 1, 3, 2]
K = 3


All subarrays of size 3:

[2, 1, 5] → sum = 8

[1, 5, 1] → sum = 7

[5, 1, 3] → sum = 9 ✅

[1, 3, 2] → sum = 6

Return: 9

Key idea used

Fixed-size sliding window

Compute the first window once

Slide by removing one element and adding the next

Track the maximum sum

*/

A = [2, 1, 5, 1, 3, 2]
K = 3

function solution(A,K){
  
  let windowSum = 0
  
  // first window
  for (let i = 0; i < K; i++){
    windowSum = windowSum + A[i]
  }
  
  let maxSum = windowSum
  
  // window shifting
  for (let i = K; i < A.length; i++){
    windowSum = windowSum - A[i - K] + A[i]
    
    maxSum = Math.max(windowSum, maxSum)
  }
  
  
  return maxSum
}

console.log(solution(A,K))

// Time Complexity: O(N) because we iterate through the array A once
// Space Complexity: O(1) because we use a fixed amount of extra space