/* 

🧩 Task Recap — Most Frequent Element with Tie-Breaker

Problem statement:

Given an array A, return the element that appears most frequently.
If there is a tie (two or more elements with the same max frequency), return the smallest element among them.

Examples
A = [3, 1, 3, 2, 1, 3]
// Counts: {3:3, 1:2, 2:1}
// Most frequent = 3
Output: 3

A = [4, 4, 1, 1, 2]
// Counts: {4:2, 1:2, 2:1}
// Tie between 4 and 1 → return the smaller: 1
Output: 1

A = [5, 5, 5, 5]
// Only 5 → return 5
Output: 5

How to solve

Use an object as a frequency counter:

count[A[i]] = (count[A[i]] || 0) + 1


Track:

maxCount → highest frequency seen so far

result → number corresponding to that frequency

Loop over all keys in the object:

If count[key] > maxCount → new winner → update result

If count[key] == maxCount → tie → update result to the smaller number

Return result at the end.

✅ Key points

Count object is used to track frequency

Tie-breaker handled with comparison of numbers

Early return is wrong here because you must check all elements to find the tie or max frequency

*/

A = [4, 4, 1, 1, 2]

function solution(A){
  count = {}
  
  for (let i = 0; i < A.length; i++) {
    if (count[A[i]]){
      count[A[i]]++
    }
    else{
      count[A[i]] = 1
    }
  }
  
  let maxCount = 0
  let result = 0
  
  for (let key in count) {
    
    let freq = count[key]
    let Numkey = Number(key)
 
    if (freq > maxCount) {
      maxCount = freq
      result = Numkey
    }
    else if (freq == maxCount) {
      result = Math.min(result, Numkey)
    }
  }
  return result
}


console.log(solution(A))

// Time complexity O(N) because we iterate through the array and then the object keys
// Space complexity O(N) because of the object used to store counts