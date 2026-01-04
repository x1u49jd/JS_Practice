/* 

🧩 Task: “Most Frequent Number (with Tie-Breaker)”

Problem statement:

You are given an array A of integers.
Return the number that appears most frequently.
If more than one number has the same highest frequency, return the largest number among them.

Key points

Use a count object to track how many times each number appears.

Loop over the count object to find the highest frequency.

Tie-breaker: if multiple numbers have the same frequency, pick the largest number.

Order in the original array does not matter.

Do not sort the array — count objects are enough.

Example 1
A = [3, 1, 3, 2, 1, 3]


Count object:

{ '1': 2, '2': 1, '3': 3 }


Most frequent: 3 → return 3 ✅

Example 2 (tie)
A = [4, 4, 1, 1, 2]


Count object:

{ '1': 2, '2': 1, '4': 2 }


Tie between 1 and 4 → pick largest number → return 4 ✅

Example 3
A = [5, 5, 5, 5]


Only one number → return 5 ✅

What your code does

Builds the count object

Finds max frequency (maxFreq)

Resolves tie by picking the largest key (largestKey)

So in short:

Return the number that occurs the most. If there’s a tie, return the largest one.

*/


A = [4, 4, 1, 1, 2]

function solution(A){
  
  count = {}
  
  // loop over array to count occurances and store in count object
  for (let i = 0; i < A.length; i++){
    if (count[A[i]]){
      count[A[i]]++
    }
    else {
      count[A[i]] = 1
    }
  }
  
  maxFreq = 0
  largestKey = 0
  
  // loop over keys in the object 
  // to find max frequency and largest number when tie happens
  for (let key in count){
    //console.log(key + ":" + count[key])
    
    if (count[key] > maxFreq){
      maxFreq = count[key]
      largestKey = Number(key)
    }
    if (count[key] === maxFreq){
      largestKey = Math.max(largestKey, Number(key))
    }
  }
  
  return largestKey
}

console.log(solution(A))

//Time Complexity: O(N) because we iterate through the array and then the object keys
//Space Complexity: O(N) because of the count object