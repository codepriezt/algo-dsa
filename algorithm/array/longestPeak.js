/**
 * 
 * 
  Write a function that takes in an array of integers and returns the length of the longest peak in the array.

  
  A peak is defined as adjacent integers in the array that are strictly increasing until they reach a tip (the highest value in the peak), at which
  point they become strictly decreasing. At least three integers are required to
  form a peak.

  For example, the integers 1, 4, 10, 2 form a peak, but the integers 4, 0, 10 don't and neither do the integers 1, 2, 2, 0. Similarly, the integers 1, 2, 3 don't
  form a peak because there aren't any strictly decreasing integers after the 3.

  sample input : array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]

  sampme output: 6 // 0, 10, 6, 5, -1, -3
 */



// solution One
// 0(n) T  | 0(1) S
function longestPeak(array) {
    // Write your code here.
      let isPeak = 0  
      let peakLength = 0  
      let currentPeak = 0
  
     for(let i =1 ; i < array.length - 1; i++){
           isPeak = array[i -1] < array[i] && array[i] > array[i + 1]
  
        if(isPeak){
           // this should check previousa and next value before of  i and run a compare
            currentPeak = getCurrentPeak(array ,i )
          if(currentPeak  > peakLength){
              peakLength = currentPeak
          }
            
        }
       
     }
  
    return peakLength;
  }   

  
  function getCurrentPeak(array , index){
    let leftIndex = index - 1
    let rightIndex = index + 1
  
    while(array[leftIndex - 1] < array[leftIndex]){
      leftIndex -= 1
    }
  
    while(array[rightIndex] > array[rightIndex + 1]){
      rightIndex += 1
    }
  
     return rightIndex - leftIndex + 1 
  }