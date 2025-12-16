/*
Problem: Smallest Missing Positive Integer

Write a function:

function solution(A);


that, given an array A consisting of N integers, returns the smallest positive integer (greater than 0) that does not appear in the array.

Examples
Example 1
A = [1, 3, 6, 4, 1, 2]


Result: 5

Example 2
A = [1, 2, 3]


Result: 4

Example 3
A = [-1, -3]


Result: 1

Assumptions

N is an integer in the range [0..100,000]

Each element of array A is an integer in the range [-1,000,000..1,000,000]
*/

let A = [1, 3, 6, 4, 1, 2]


function solution(A){
  
  let B = A.sort((a,b) => a - b)
  let s = new Set(B)
  let s1 = [...s]

  
  let expected = 1;
  
  for (const i in s1){
    
    if (s1[i] < expected) continue;
    
    if (s1[i] == expected) {
      expected = expected + 1
    }
    else {
      return expected
    }
  }
  
  return expected
  
}

console.log(solution(A))

