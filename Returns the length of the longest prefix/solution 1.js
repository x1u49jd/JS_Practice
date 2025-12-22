/*

Problem statement

Write a function:

function solution(A);


that, given an array A of integers, returns the length of the longest prefix (starting at index 0) in which the numbers are strictly increasing.

What “prefix” means

A prefix must start from the first element

You are not allowed to skip elements

Once the condition fails, you stop

What “strictly increasing” means

Each next element must be greater than the previous one:

A[i + 1] > A[i]

Examples
[1, 3, 5, 7, 9]     → 5
[1, 3, 2, 4, 5]     → 2
[5, 5, 6, 7]        → 1
[10]               → 1
[]                 → 0

What the exercise trains

Looping through arrays

Comparing neighboring elements

Correct loop boundaries (length - 1)

Using break correctly

Avoiding off-by-one errors

Thinking in O(N) time */



A = [1, 3, 2, 4, 5]

function solution(A){
  
  let prefix = 1
  
  for (let i = 0; i < A.length - 1; i++){
    
    if (A[i + 1] > A[i]) {
      prefix = prefix + 1
    }
    else {
      break
    }
    
    
  }
  
  return prefix
  
}

console.log(solution(A))

//Time Complexity: O(N): because we iterate through the array only once
//Space Complexity: 0(1): we use only a variable to store the prefix length