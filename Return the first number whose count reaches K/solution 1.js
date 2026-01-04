/*

🧩 Task: First Number to Reach K Occurrences

Problem statement (in plain language):

You are given an array A of numbers and a number K.
Scan the array from left to right.
Return the first number whose count reaches K.
If no number reaches K, return -1.

🔹 Key points

Use a count object to keep track of how many times each number appears.

Order matters: you must check counts as you go.

Early return is allowed: return as soon as a number hits K occurrences.

✏️ Examples

Example 1:

A = [1, 2, 1, 3, 2, 1]
K = 2


Step-by-step:

1 → count = 1

2 → count = 1

1 → count = 2 ✅ first to reach K

Return: 1

*/

A = [1, 2, 1, 3, 2, 1]
K = 2

function solution(A,K){
  count = {}
  
  for (let i = 0; i < A.length; i++){
    if (count[A[i]]){
      count[A[i]]++
    }
    else {
      count[A[i]] = 1
    }
    
    if (count[A[i]] === K) {
      return A[i]
    }
    
  }
  
  return -1

}

console.log(solution(A,K))

//Time Complexity: O(N) because we iterate through the array once
//Space Complexity: O(N) because of the count object