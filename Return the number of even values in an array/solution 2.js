/* 

Write a function

function solution(A);


that, given an array A consisting of N integers, returns the number of even values in the array.

Example

Given array A consisting of six elements such that:

A[0] = 2    A[1] = 5    A[2] = 8
A[3] = 3    A[4] = 10   A[5] = 7


the function should return 3, because there are three even numbers in the array: 2, 8, and 10.

Assumptions

N is an integer within the range [0..100,000]

Each element of array A is an integer within the range [-1,000,000..1,000,000]

*/

let A = [2, 5, 8, 3, 10, 7]

function solution(A){
  
  let count = 0;
  
  for (const i in A) {
    
    if (A[i] % 2 == 0) {
      count = count + 1
    }
  }
  
  return (count)
  
}

solution(A)

// Time Complexity: O(N) because you loop through the array once (you look at each element once)
// Space Complexity: O(1) because you only use a single variable to keep track of the count, no extra memory grows with N.