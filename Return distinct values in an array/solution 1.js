/*
Write a function

function solution(A);

that, given an array A consisting of N integers, returns the number of distinct values in array A.

For example, given array A consisting of six elements such that:

 A[0] = 2    A[1] = 1    A[2] = 1
 A[3] = 2    A[4] = 3    A[5] = 1
the function should return 3, because there are 3 distinct values appearing in array A, namely 1, 2 and 3.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/


const A = [2, 1, 1, 2, 3, 1];


function solution(A){
  
  const list = []
  const repeat = []
  
  if (A.length != 0) {
  console.log("array isnt empty!")

  for (const n of A) {
      if (list.includes(n)){
        repeat.push(n)
      }
      else {
        list.push(n)
      }
  }
    
  }
  else {
    console.log("array is empty!")
  }
  
  console.log(list.length)
};

solution(A)

// Time Complexity: O(N²) because of the nested loop created by the includes() method inside the for...of loop.
// Space Complexity: O(N) because you store unique values in the list array.