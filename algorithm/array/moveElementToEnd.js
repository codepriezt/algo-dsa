/**
 * 
 * 
 *  You're given an array of integers and an integer. Write a function that moves
   all instances of that integer in the array to the end of the array and returns
  the array.



  The function should perform this in place (i.e., it should mutate the input
  array) and doesn't need to maintain the order of the other integers.




  Sample Input
   array  = [2, 1, 2, 2, 2, 3, 4, 2]
   toMove = 2

   Sample Output 
    [1, 3, 4, 2, 2, 2, 2, 2] 
 */
 


//solution One
  // 0(n) T | 0(1) S

  function moveElementToEnd(array, toMove) {
    // Write your code here.
  
    let leftPointer = 0
    let rightPointer = array.length - 1
  
    while (leftPointer < rightPointer){
       let current =  array[leftPointer]
       let right = array[rightPointer]
  
      if(right !== toMove ) {  
         if(current === toMove ){
            array[leftPointer] = right
            array[rightPointer] = current     
         }
        leftPointer += 1
      }else{
         rightPointer -=1
       }
    }
    return array
  }
  

//solution two
// 0(n) T | 0(n) S

function moveElementToEnd(array, toMove) {
    // Write your code here.
  
    //0(n)T | 0(n) S
    let newArray = []
    let tempArray = []
   
    for(let i = 0 ;  i < array.length; i++){
        let current = array[i]
        if(current != toMove){
            newArray.push(current)
         }else{
            tempArray.push(current)
         }
    }
    return  newArray.concat(tempArray)
  }