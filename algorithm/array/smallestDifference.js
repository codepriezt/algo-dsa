/**
 * 
  Write a function that takes in two non-empty arrays of integers, finds the
  pair of numbers (one from each array) whose absolute difference is closest to
  zero, and returns an array containing these two numbers, with the number from
  the first array in the first position.


  Note that the absolute difference of two integers is the distance between
  them on the real number line. For example, the absolute difference of -5 and 5
  is 10, and the absolute difference of -5 and -4 is 1.

 
  You can assume that there will only be one pair of numbers with the smallest
  difference.


  Sample Input :   [-1, 5, 10, 20, 28, 3] ,  [26, 134, 135, 15, 17]
  Sample Output : [28 , 26]
 */

// solution
// O(nlog(n) + mlog(m)) Time |   0(1) S


function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
  
     arrayOne.sort((a,b) => a - b)
     arrayTwo.sort((a,b) => a - b)
  
      let left = 0 , right = 0
      let smallest = Number.MAX_VALUE
      let current = Number.MAX_VALUE
      let pairs = []
  
    
      //use a while loop to go through both array at once 
       while (left < arrayOne.length && right < arrayTwo.length){
          let fnum = arrayOne[left]
          let lnum = arrayTwo[right]
          
          if(fnum < lnum){
            current = lnum - fnum
            left +=1
          }else if(fnum > lnum){
            current  = fnum - lnum
            right += 1
          }else{
            return [fnum , lnum]
          }
       
         if(smallest > current){
             smallest = current
             pairs = [fnum , lnum]
         } 
       }
  
     return pairs
    
  }
  