/*

🧩 Exercise: Most Frequent Element
Task

Write a function:

function solution(A);


that, given an array A of integers, returns the element that appears most frequently in the array.

If multiple elements have the same highest frequency, return the first one in the array.

Examples
Example 1
A = [3, 1, 3, 2, 1, 3]


3 appears 3 times, 1 appears 2 times, 2 appears 1 time

Answer: 3

Example 2
A = [4, 5, 4, 5, 6]


4 appears 2 times, 5 appears 2 times, 6 appears 1 time

Tie → 4 comes first

Answer: 4

Example 3
A = [7, 8, 9]


All appear once → first element is 7

Answer: 7

Hints / Rules

Use a basic object to count occurrences.

Track the maximum count as you go.

Must preserve first occurrence if there’s a tie.

Avoid sorting the array — order matters.

What this exercise trains

Using objects for counting

Keeping track of max values dynamically

Handling ties and first occurrences

Thinking about time and space complexity

*/

A = [3, 1, 3, 2, 1, 3]


function solution(A){
  
  count = {}
  
  for (let i = 0; i < A.length; i++){
    if (count[A[i]]){
      count[A[i]] = count[A[i]] + 1
    }
    else {
      count[A[i]] = 1
    }
  }
  
  let maxCount = 0
  let mostFrequent = null;
  
  
  for (let i = 0; i < A.length; i++){
   if(count[A[i]] > maxCount){
     maxCount = count[A[i]];
     mostFrequent = A[i];
   }
  }
  
  return mostFrequent
}


console.log(solution(A))

// Time Complexity: O(N) because we iterate through the array twice
// Space Complexity: o(N) because we use the object to store the count of each element in the A array