/* 🧩 Task: Count values appearing exactly K times

Problem statement:

Given an array A and a number K, return how many distinct values appear exactly K times in A.

Examples
A = [1, 2, 2, 3, 3, 3, 4]
K = 2
Output: 1
// Only "2" appears exactly 2 times

A = [1, 2, 2, 3, 3, 4, 4]
K = 2
Output: 3
// 2, 3, 4 all appear exactly 2 times

A = [5, 5, 5, 5]
K = 1
Output: 0
// No value appears exactly 1 time

Steps to solve

Count occurrences of each value using an object:

count[A[i]] = (count[A[i]] || 0) + 1


Loop over object keys and count how many values have count[key] === K

Return that total

Important notes

Early return does not work, because you might have multiple values appearing exactly K times

Object is used as a frequency map

Space complexity = O(N), time complexity = O(N) */


A = [1, 2, 2, 3, 3, 3, 4]
K = 2

function solution(A,K){
  
count = {}

for (let i = 0; i < A.length; i++) {
  if (count[A[i]]) {
    count[A[i]] = count[A[i]] + 1
  }
  else {
    count[A[i]] = 1
  }
}

result = 0

for (let key in count) {
  if (count[key] === K) {
    result = result + 1
  }
}

return result
}

console.log(solution(A, K))

// Time Complexity: O(N) because we iterate through the array and then the object keys
// Space Complexity: O(N) because we store the count of each element in the object