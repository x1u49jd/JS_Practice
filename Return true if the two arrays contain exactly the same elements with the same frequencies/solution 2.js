/* 

🧩 Task: Check if Two Arrays Are Anagrams
Problem Statement

Write a function:

function solution(A, B);


that returns true if the two arrays contain exactly the same elements with the same frequencies, regardless of order. Otherwise, return false.

Key Points

The order of elements does not matter

Each element must appear the same number of times in both arrays

Arrays can contain integers (or any comparable values)

Examples
A = [1, 2, 3]
B = [3, 1, 2]
Output: true

A = [1, 2, 3]
B = [3, 1, 8]
Output: false

A = [1, 2, 2, 3]
B = [1, 2, 3, 3]
Output: false

Objective

Compare arrays based on content and frequency, not order

You can solve this with:

Sorting + comparison (O(N log N))

Object/Map counting (O(N))

In short:

Return true if the arrays are “anagrams” of each other, otherwise false.

*/


A = [1, 2, 3]
B = [3, 1, 2]


function solution(A,B){

count = {}

for (let i = 0; i < A.length; i++) {
  if (count[A[i]]){
    count[A[i]] = count[A[i]] + 1
  }
  else {
    count[A[i]] = 1
  }
}

for (let i = 0; i < B.length; i++) {
  if (!count[B[i]]){
    return false
  }
  else {
    count[B[i]] = count[B[i]] - 1
  }
}

return true

}
console.log(solution(A,B))

// Time Complexity: O(N) because we iterate through both arrays once
// Space Complexity: O(N) because we store the count of each element in the object