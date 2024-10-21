


/**
 * 
 * 
   Write a function that takes in an n x m two-dimensional array (that can be
   square-shaped when n == m) and returns a one-dimensional array of all the
   array's elements in spiral order.


   Spiral order starts at the top left corner of the two-dimensional array, goes
   to the right, and proceeds in a spiral pattern all the way until every element
   has been visited.


 sample input 
array = [
  [1,   2,  3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10,  9,  8, 7],
 ]

sample output 
 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
 */


// solution 
// 0(n) T | 0(n) S
function spiralTraverse(array) {
    // Write your code here.
  
     let result = []
  
     let startRow = 0
     let endRow = array.length - 1
  
     let startCol = 0
     let endCol = array[0].length - 1
  
    while(startCol <= endCol && startRow <= endRow){
  
  
      // forward movement
        for(let col = startCol; col <= endCol; col++){
             result.push(array[startRow][col])
        }
        startRow += 1
      if(startRow > endRow) break;
  
  
      // down movement
        for (let dwnrow = startRow; dwnrow <= endRow; dwnrow++){
             result.push(array[dwnrow][endCol])
        }
        endCol -= 1
        if(startCol > endCol) break
  
  
     // backward movement
      for(let bkcol = endCol ; bkcol >= startCol; bkcol-- ){
          result.push(array[endRow][bkcol])
      }
      endRow -= 1
      if(startRow > endRow) break;
  
  
      // upward movement
      for(let uprow = endRow ; uprow >= startRow; uprow--){
            result.push(array[uprow][startCol])
      }
      startCol += 1
      if(startCol > endCol) break;
    }  
  
      return result
  }
  