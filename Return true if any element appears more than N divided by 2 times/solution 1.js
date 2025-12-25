/*

🧩 Exercise: Element Frequency Check
Task

Write a function:

function solution(A);


that, given an array A of integers, returns true if any element appears more than N / 2 times (where N is the length of the array).

If no such element exists, return false.

This element is sometimes called a majority element.

Examples
A = [3, 3, 4, 3, 2]


Length = 5

3 appears 3 times

3 > 5 / 2 → true
✅ Return: true

A = [1, 2, 3, 4]


No number appears more than 2 times
❌ Return: false

A = [2, 2, 1, 2, 3, 2, 2]


Length = 7

2 appears 5 times
✅ Return: true

Rules / Hints

Use a basic object to count occurrences

You can return early once a count exceeds A.length / 2

No sorting

Aim for O(N) time

What this exercise trains

Counting with objects (again, reinforcing the skill)

Early exits from loops

Understanding thresholds (N / 2)

Reading problem statements carefully

*/

A = [3, 3, 4, 3, 2]


A = [3, 3, 4, 3, 2]


function solution(A){
  
  // object to hold the count
  let count = {}
  
  for (let i = 0; i < A.length; i++){
    if (count[A[i]]){
      count[A[i]] = count[A[i]] + 1
    }
    else {
      count[A[i]] = 1
    }
    
    if (count[A[i]] > A.length / 2){
      return true
    }
  }

  return false
  
}


console.log(solution(A))


solution(A)

//Time Complexity: O(N) because we iterare through the array once
//Space Complexity: O(N) because we use the object to store the count of each element in the A array