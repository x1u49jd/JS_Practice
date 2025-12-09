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