/*

🧩 Task: Check if Two Arrays Are Anagrams
Problem Statement

Write a function:

function solution(A, B);


that returns true if the two arrays contain exactly the same elements with the same frequencies, regardless of order.

Otherwise, return false.

Key Points

Order of elements does not matter

Each element must appear the same number of times in both arrays

Arrays can contain integers (or any comparable values)

Examples
A = [1, 2, 3]
B = [3, 1, 2]
Output: true

A = [1, 2, 2, 3]
B = [1, 2, 3, 3]
Output: false

A = [4, 5, 6]
B = [4, 5, 6, 7]
Output: false

*/

A = [1, 2, 3]
B = [3, 1, 2]

function solution(A){
  A.sort()
  B.sort()
  
  console.log(A)
  console.log(B)
  
  if (JSON.stringify(A) == JSON.stringify(B)) {
    return true
  }
  else {
    return false
  }

}

console.log(solution(A))

// Time Complexity: O(N log N) due to sorting
// Space Complexity: O(N) for storing sorted arrays during comparison