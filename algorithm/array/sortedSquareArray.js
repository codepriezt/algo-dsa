/**
 * Write a function that takes in a non empty array of integers that are sorted in ascending ordernd returns
 * a new array of same length with the squares of the original integers also sorted in ascending order.
 */


//solution one
//0(nlogn)Time | 0(n) Space
function sortedSquaredArray(array) {
    // Write your code here.
      let newArray = [];
  
      for(value in array){
         let square = array[value] * array[value]
          newArray.push(square)
      }
    return newArray.sort(function(a, b){return a - b})
  }
  
// solution two
//0(n) T | 0(n) S
function sortedSquaredArray(array) {
    // Write your code here.
    let last = array.length - 1
    let small = 0
    let smallerValue,lastValue
  
    let sortedArray = new Array(array.length)
  
    for(let i = last; i >= 0; i--){
      
          smallerValue = Math.abs(array[small])
          lastValue = Math.abs(array[last])
  
        if(smallerValue >  lastValue){
          sortedArray[i] = smallerValue ** 2
          small += 1
        }else{
          sortedArray[i] = lastValue ** 2
          last -= 1
        }
    }
    return sortedArray
    
  }