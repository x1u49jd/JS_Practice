/* 

Challenge: Count Numbers Greater Than Average

Write a function:

function solution(A);


that, given an array A consisting of N integers, returns the number of elements in the array that are greater than the average value of the array.

Example

Given:

A = [2, 5, 8, 3, 10, 7]


The average is (2 + 5 + 8 + 3 + 10 + 7) / 6 ≈ 5.833

Numbers greater than the average: 8, 10, 7 → 3 numbers

So solution(A) should return 3.

Assumptions

N is an integer in the range [0..100,000]

Each element of A is an integer in the range [-1,000,000..1,000,000]

If the array is empty, return 0

*/

A = [2, 5, 8, 3, 10, 7]


function solution(A){
  
  let total = 0;
  
  for (const i in A) {
    total = total + A[i]
  }
  
  let average = total / A.length
  
  let count = 0;
  
  for (const i in A) {
    if (A[i] > average) {
      count = count + 1;
    }
  }
  
  return count

}

console.log(solution(A))