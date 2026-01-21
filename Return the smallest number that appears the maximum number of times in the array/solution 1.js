/*

🧩 Final Consolidation Challenge
Problem Statement

You are given an array of integers A.

Return the smallest number that appears the maximum number of times in the array.

Rules & Clarifications

You must use a count object.

If multiple numbers share the same highest frequency:

return the smallest number among them.

You must examine all elements before deciding (early return will be wrong).

If the array is empty, return null.

Examples
Example 1
A = [4, 4, 1, 1, 2]


Counts:

4 → 2

1 → 2

2 → 1

Max frequency = 2
Smallest number with that frequency = 1

✅ Return: 1

Example 2
A = [3, 3, 3, 2, 2, 1]


Counts:

3 → 3

2 → 2

1 → 1

Max frequency = 3
Smallest number with that frequency = 3

✅ Return: 3

Example 3
A = []


✅ Return: null

Hints (not code)

First loop → build the count object

Second loop → track:

current max frequency

best result so far

Be careful with number vs string keys

Think carefully about the tie condition

What this challenge checks

✔ Can you build and use a count object
✔ Can you delay returning until all data is processed
✔ Can you handle tie-breaking correctly
✔ Can you reason clearly about the problem

When you’re ready:

paste your solution

I’ll review it carefully

then I’ll tell you honestly how strong it is and what level you’re at

Take your time — this is a capstone exercise 💪

*/

A = [3, 3, 3, 2, 2, 2, 1]
function solution(A){
  count = {}
  for (let i = 0; i < A.length; i++){
    let numKey = A[i]
    if (!count[numKey]){ 
      count[numKey] = 1
    }
    else { 
      count[numKey]++ 
    } 
  } 
  
  let maxFreq = 0;
  
  for (let numKey in count){ 
    if (count[numKey] > maxFreq) {
      maxFreq = count[numKey]; 
    } 
  } 
  let smallest = 100 
  
  for (let numKey in count){ 
    if (count[numKey] === maxFreq && numKey < smallest) { 
      smallest = numKey 
      
    } 
  } 
  return "Max Freq: " + maxFreq + " Smallest number: " + smallest
} 
console.log(solution(A))

// Time Complexity: O(N) beacuse we traverse the array A two times
// Space Complexity: O(N) because we use a hash map to store the frequency of each element in the array A