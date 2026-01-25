A = [2, 0, 2, 3, 1, 2]
K = 2

function solution(A,K){
  
  count = {}
  
  for (let i = 0; i < A.length; i++){
    let num = A[i]
    
    if (!count[num]){
      count[num] = 1
    }
    else {
      count[num]++
    }
    
    if (count[num] === K) {
      return num
    }
    
  }
  
  return -1
}

console.log(solution(A,K))

// Time Complexity: O(N) because we iterate through the array A once
// Space Complexity: O(N) because of the count object size increases with the number of elements in the array A