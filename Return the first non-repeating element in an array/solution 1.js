/*

🧩 Exercise: First Non-Repeating Element
Problem statement

Write a function:

function solution(A);


that, given an array of integers A, returns the first element that does NOT repeat in the array.

If every element repeats, return -1.

What it means in plain words

Go through the array in order.

Find the first number that appears exactly once.

Order matters — “first” means the earliest occurrence in the array.

Examples
A = [4, 3, 1, 3, 4, 2]
// 4 → repeats
// 3 → repeats
// 1 → appears once ✅ first non-repeating
Output: 1

A = [1, 2, 2, 1]
// 1 → repeats
// 2 → repeats
// no number appears once
Output: -1

Key points

You need to count how many times each element appears

Then go through the array again to find the first element with count = 1

Using a basic object or Map is a simple way to store counts

✅ Summary

Return the first number in the array that appears only once.
If all numbers repeat → return -1.

*/


A = [4, 3, 4, 3, 4, 3]

function solution(A){

  let counts = {}
  
  
  
  for (let i = 0; i < A.length; i++){
    if (counts[A[i]]){
      counts[A[i]] = counts[A[i]] + 1
    }
    else {
      counts[A[i]] = 1
    }
  }
  
  
  for (let i = 0; i < A.length; i++){
    if (counts[A[i]] === 1) {
      return A[i]
    }
  }

  return -1
  
}


console.log(solution(A))

// Time Complexity: O(N) because we iterate through the array twice
// Space Complexity: O(N) because we use an object to store the counts of each element