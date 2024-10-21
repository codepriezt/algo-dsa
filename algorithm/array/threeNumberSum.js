/**
* 
Write a function that takes in a non-empty array of distinct integers and an
integer representing a target sum. The function should find all triplets in
the array that sum up to the target sum and return a two-dimensional array of
all these triplets. The numbers in each triplet should be ordered in ascending
order, and the triplets themselves should be ordered in ascending order with
respect to the numbers they hold.

If no three numbers sum up to the target sum, the function should return an
empty array.

Sample Input
array = [12, 3, 1, 2, -6, 5, -8, 6]
targetSum = 0

Sample Output
[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

*/


// o(n^2) T | o(n) square
function threeNumberSum(array, targetSum) {
    // Write your code here.
    
    let currentSum = 0
    let newArray = []
    array.sort(function(a,b){
          return a - b
      })
  
   for(let currentNumber = 0; currentNumber < array.length ; currentNumber++ ){
  
      let leftPointer = currentNumber + 1
      let rightPointer = array.length - 1
    while(leftPointer < rightPointer ){
        currentSum = array[currentNumber] + array[leftPointer] + array[rightPointer]
      if(currentSum == targetSum){
          newArray.push([array[currentNumber] , array[leftPointer] , array[rightPointer]])
          leftPointer += 1
          rightPointer -= 1  
      }else if(currentSum < targetSum){
          leftPointer += 1
      }else if(currentSum > targetSum ){
           rightPointer -= 1
       }   
      }
    }
   
    return newArray
  
    
  }