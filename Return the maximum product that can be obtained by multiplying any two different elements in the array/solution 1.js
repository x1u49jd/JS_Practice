/* 

🧩 Exercise: Maximum Product of Two Numbers

Write a function:

function solution(A);


that, given an array A of integers, returns the maximum product that can be obtained by multiplying any two different elements in the array.

Examples
Example 1
A = [3, 6, -2, -5, 7, 3]


Possible products:
3*6=18, 3*-2=-6, 6*-2=-12, -2*-5=10, 7*3=21 …

Maximum product: 7*6=42

Answer: 42

Example 2
A = [-3, -1, -2, -4]


Maximum product comes from the two largest negatives: -3 * -2 = 6

Answer: 6

Assumptions

N is in the range [2..100,000] (at least two elements)

Each element of A is an integer in the range [-1,000,000..1,000,000]

What this exercise practices

Thinking about maximum/minimum values

Considering negative numbers

Efficient array traversal

Avoiding O(N²) brute-force if possible

This one is tricky because:

The maximum product could come from two large positives

Or two small negatives

*/


A = [3, 6, -2, -5, 7, 3]


function solution(A){
  A.sort((a,b) => a - b)
  let num1 = A[0] * A[1]
  let num2 = A[A.length - 1] * A[A.length - 2]
  
  if (num1 > num2) {
    return num1
  }
  else {
    return num2
  }
  
}


console.log(solution(A))

// Time Complexity: 0(N log N): because of the sort method
// Space Complexity: 0(1): we use a variable to store the product