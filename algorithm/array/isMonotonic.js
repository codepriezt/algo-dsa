

/**
 * 
 *
  Write a function that takes in an array of integers and returns a boolean
  representing whether the array is monotonic.


  An array is said to be monotonic if its elements, from left to right, are
  entirely non-increasing or entirely non-decreasing.



  Non-increasing elements aren't necessarily exclusively decreasing; they simply
  don't increase. Similarly, non-decreasing elements aren't necessarily
  exclusively increasing; they simply don't decrease.


 Note that empty arrays and arrays of one element are monotonic.

Sample Input 
array= [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]

Sample Output 
true


 */







// solution  
// 0(n)T | 0(1) S
function isMonotonic(array) {
    // Write your code here.
  
    if(array.length <= 1) return true
  
     let isDecreasing = true
     let isIncreasing = true
  
    for(let i = 1 ; i < array.length ; i++){
          if(array[i] < array[i - 1]){
              isDecreasing = false
          }
  
       if(array[i] > array[i - 1]){
              isIncreasing = false
          } 
    }
  
    return isDecreasing || isIncreasing 
    
  }