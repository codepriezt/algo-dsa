/**
 * 
 * Question
 * Write a function that takes in a non empty array of distinct integers and an interfer representing a target sum , if nay two number in the input array 
 * sum up to the target sum , the function should return them in an array, in any order .. if no number sum up to the target sum , the function should return
 * an empty array. 
 *  
 * Note that the target sum has to be obtained by summing two different integers in the array , you cant add a single integer to itself in order to obtain the target sum.
 * 
 * You can assume that there will be at most one pair of number summing to the target sum. 
 */




// solution one using a hashtable

// o(n) time  | o(n) space
function twoNumberSum(array, targetSum) {
    // Write your code here.
    let hashTable = {}


    for (let index = 0; index < array.length; index++) {
         let y = targetSum - array[index]
         if(hashTable[y]){
           return [y , array[index]]
         }else{
           hashTable[array[index]] = true
         }
    }
    return [];
  
  }


// solution 2

// o(nlog(n))time | o(1) space
function twoNumberSum(array, targetSum) {
    // Write your code here.

    // first of sort the array in ascending order
      array.sort(function(a,b){
        return a - b
      })
    
     let left = 0
     let right = array.length - 1

    
   
     while (left < right) {
       let currentSum = array[left] + array[right];
         if (Number(currentSum) === Number(targetSum)) {
             return [array[left] , array[right] ]
         }else if(currentSum < targetSum){
           left += 1
         }else{
           right -= 1
         }
     }
    return []
  }