/**

🎯 Your NEXT challenge (chosen specifically for you)

This is new, uses count, but adds a twist.

🔥 Challenge: “Most frequent EVEN number”

Problem

Given an array of integers A, return the even number that appears most frequently.
If there is a tie, return the smallest even number.
If there are no even numbers, return -1.

Example

A = [1, 2, 2, 4, 4, 4, 6, 6]
// Output: 4


Rules

Use a count object

Do NOT sort

Think about edge cases

🧠 How you should approach it (no solution yet)

1️⃣ Count only even numbers
2️⃣ Track maxFreq
3️⃣ Handle tie with smallest value
4️⃣ Return -1 if no even numbers exist

✅ When you’re done, I will:

Review your solution line-by-line

Suggest a one-pass optimization

Show how this appears in interviews

Tell you exactly what to practice next

Take your time — you’re progressing correctly, not fast-and-sloppy 💪
*/

A = [1, 2, 2, 2, 4, 4, 4, 6, 6]

function solution(A) {
  count = {}
  
  for (let i = 0; i < A.length; i++){
    
    // only even numbers counted
    if (A[i] % 2 === 0){
      let num = A[i]
        
      if (!count[num]) {
        count[num] = 1
      }
      else {
        count[num]++
      }
      
    }
  }
  
  let maxFreq = 0;
  let result = -1;
  
  // returns most frequent even number
  for (let key in count) {
    let freq = count[key]
    let num = Number(key)
    
    
    if (freq > maxFreq) {
      maxFreq = freq
      result = num
    }
    // if tie, choose lowest number
    else if (freq === maxFreq) {
      result = Math.min(result, num)
    }
  }
  
  return result
}


console.log(solution(A))

// Time Complexity: O(N) because we traverse the array A only one time
// Space Complexity: O(N) because we use the count object to store the frequency of even numbers