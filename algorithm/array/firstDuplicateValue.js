
/**
 * 
 *
  Given an array of integers between <span>1</span> and <span>n</span>,
  inclusive, where <span>n</span> is the length of the array, write a function
  that returns the first integer that appears more than once (when the array is
  read from left to right).


  In other words, out of all the integers that might occur more than once in the
  input array, your function should return the one whose first duplicate value
  has the minimum index.



  If no integer appears more than once, your function should return -1.


  array = [2, 1, 5, 2, 3, 3, 4]
  

  sample output
  2


 array = [2, 1, 5, 3, 3, 2, 4]
  
 sample output
  3


 */




//solution 
// 0(n) T and  0(n) S
function firstDuplicateValue(array) {
    // Write your code here.
    //o(n) T and 0(n) S
  
    let hashTable  = {}
  
     for(let i in array){
          let key = array[i]
         if(hashTable[key]){
             hashTable[key] += 1 
            return key
         }else{
           hashTable[key] = 1 
         }
     }
  
      return -1
  }