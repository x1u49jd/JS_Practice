/* 

Problem Statement

You are given:

An array of integers: A = [a₀, a₁, …, aₙ₋₁]

A number K

Your goal:

Count how many distinct pairs of indices (i, j) exist such that:

i < j (so the first index comes before the second)

A[i] + A[j] === K (the sum of the pair equals K)

You should use a count object (hashmap) to help track occurrences efficiently, instead of using nested loops.

Examples

Example 1

A = [1, 2, 3, 2, 3]
K = 5


Valid pairs (i,j):

(1,2) → 2 + 3 = 5

(1,4) → 2 + 3 = 5

(3,2) → 2 + 3 = 5 ✅ (indices matter)

(3,4) → 2 + 3 = 5

Return: 4

Example 2

A = [1, 1, 1]
K = 2


Valid pairs:

(0,1), (0,2), (1,2) → sum is 2

Return: 3

Hints (conceptual, not step-by-step code)

Keep a count object to track how many times each number has appeared so far.

For each new number num in the array, calculate complement = K - num.

If complement exists in the count object, it means there are count[complement] numbers you’ve already seen that can pair with num.

Add that many to the total pairs counter.

Update the count object to include the current num.

*/

A = [1, 2, 3, 2, 3]
K = 5


function solution(A,K){
  
  let count = {}
  let pairs = 0;
  
  for (let i = 0; i < A.length; i++){
    let num = A[i]
    let complement = K - num
    
    
    if (count[complement]) {
      pairs = pairs + count[complement]
    }
    
    if (!count[num]){
      count[num] = 1
    }
    else {
      count[num] = count[num] + 1
    }
  }
  
  return pairs
  
}

console.log(solution(A,K))

// Time Complexity: O(N) because we iterate through the array
// Space Complexity: O(N) because we use a count object to store occurrences