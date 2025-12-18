/*Problem: Count Pairs With Given Sum

Write a function:

function solution(A, S);


that, given:

an array A of N integers

an integer S

returns the number of unique pairs (i, j) where:

i < j

A[i] + A[j] === S

Example 1
A = [1, 2, 3, 4, 3]
S = 6


Pairs with sum 6: (2,4) → 2+4, (3,3) → 3+3

Answer: 2

Example 2
A = [1, 5, 7, -1, 5]
S = 6


Pairs with sum 6: (1,5), (7,-1), (1,5)

Answer: 3

Assumptions

N is an integer in [0..100,000]

Each element of A is an integer in [-1,000,000..1,000,000]

Elements may repeat*/

A = [1, 2, 3, 4, 3]
S = 6


function solution(A,S){
  
  let count = 0
  
  for (let i = 0; i < A.length; i++){
    for (let j = i + 1 ; j < A.length; j++){
      
      if (A[i] + A[j] === S) {
        console.log(A[i] + " and " + A[i])
        count = count + 1
      }
    }
  }
  
  return count
}


console.log(solution(A,S))

//Time Complexity: O(N^2): because of the two nested loops
// Space Complexity: O(1): as no extra space is used, only a counter variable