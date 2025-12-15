/*
A non-empty array A consisting of N integers is given. The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).

For example, array A such that:

  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
contains the following example triplets:

(0, 1, 2), product is −3 * 1 * 2 = −6
(1, 2, 4), product is 1 * 2 * 5 = 10
(2, 4, 5), product is 2 * 5 * 6 = 60
Your goal is to find the maximal product of any triplet.

Write a function:

function solution(A);

that, given a non-empty array A, returns the value of the maximal product of any triplet.

For example, given array A such that:

  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
the function should return 60, as the product of triplet (2, 4, 5) is maximal.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [3..100,000];
each element of array A is an integer within the range [−1,000..1,000].
*/

/* Failed attempt

const A = [-3, 1, 2, -2, 5, 6]

function solution(A) {
  
  let max = 0
  let max2 = 0
  let max3 = 0
  
  // finds biggest value in the array
  for (const i in A) {
    
    if (max == 0){
      max = max + A[i]
    }
    else if (max < A[i]) {
      max = 0
      max = max + A[i]
    }
    
  }

  // finds 2nd biggest value in the array  
  for (const i in A) {

    if (max2 == 0 && !(A[i] >= max)){
        max2 = max2 + A[i]
    }
    else if (max2 < A[i] && !(A[i] >= max)) {
      max2 = 0
      max2 = max2 + A[i]
    }
  }
  
  // finds 3rd biggest value in the array  
  for (const i in A) {
    
    if (max3 == 0 && !(A[i] >= max2)){
        max3 = max3 + A[i]
    }
    else if (max3 < A[i] && !(A[i] >= max2)) {
      max3 = 0
      max3 = max3 + A[i]
    }
  }
  
  console.log(max)
  console.log(max2)
  console.log(max3)
  
  console.log(max * max2 * max3)
  
}


solution(A) */

// Correct solution

const A = [-3, 1, 2, -2, 5, 6]

function solution(A){
  // sort 
  A.sort((a, b) => a - b)
  
  // get length
  n = A.length
  
  let Sum1 = A[n-1] * A[n-2] * A[n-3]
  let Sum2 = A[0] * A[1] * A[n-1]
  
  console.log(Math.max(Sum1, Sum2))
  
}

solution(A)