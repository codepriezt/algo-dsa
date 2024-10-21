
/***
 * 
  Write a function that takes in a non-empty array of arbitrary intervals,
  merges any overlapping intervals, and returns the new intervals in no
  particular order.


  Each interval interval is an array of two integers, with
 interval[0] as the start of the interval and
  interval[1] as the end of the interval.


  
  Note that back-to-back intervals aren't considered to be overlapping. For
  example, [1, 5]and [6, 7]aren't overlapping;
  however, [1, 6] and [6, 7] are indeed
  overlapping.

 
  Also note that the start of any particular interval will always be less than
  or equal to the end of that interval.



Sample Input
 Intervals = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]



 Sample Output
[[1, 2], [3, 8], [9, 10]]
// Merge the intervals [3, 5], [4, 7], and [6, 8]
// The intervals could be ordered differently

 */


// 0(nlog(n)) time and 0(1)space
function mergeOverlappingIntervals(array) {
    // sort the array first of all 
    array.sort((a , b) => a[0] - b[0] )
   let outputArray = [array[0]]
   
   for(let index = 1; index < array.length ; index++ ){
       let currentItem = array[index]
       let currentItemFirstIndex = currentItem[0]

       let lastItem = outputArray[outputArray.length -1]
       let lastIndex = lastItem[lastItem.length - 1]

      if(lastIndex >= currentItemFirstIndex){
          let curLastIndex =  currentItem[currentItem.length - 1] 
            let max = Math.max(lastIndex , curLastIndex )  
           outputArray[outputArray.length - 1] = [lastItem[0] , max]
      }else{
        outputArray.push(currentItem)
      }
   }
 return outputArray
   
 }