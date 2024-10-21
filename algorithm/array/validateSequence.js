/**
 * given two non-empty array of integer, write a function that determines whether the second array is a subsequence of the first one
 * 
 * A subsequence if an array is a set of number that arent necessarily adjacent in th array but that are in the 
 * same order as they appear in the array. For instance the number [1, 3,4] form a subsequence of the array [1,2,3,4] and so do the numbcer [2,4]
 * 
 * Sample Input 
 *  array = [5, 1, 22, 25, 6, -1 , 8 , 10]
 *  sequence = [1 , 6, -1 , 10]
 */



// this soluction follow a concept of subsequence concept in mathematics 

/**
 *  In mathematics, a subsequence of a given sequence is a sequence that can be derived from the given sequence by deleting some or no elements without changing the order of the remaining elements. 
 *  For example, the sequence {\displaystyle \langle A,B,D\rangle }{\displaystyle \langle A,B,D\rangle } is a subsequence of {\displaystyle \langle A,B,C,D,E,F\rangle }{\displaystyle \langle A,B,C,D,E,F\rangle } 
 *  obtained after removal of elements {\displaystyle C,}{\displaystyle C,} {\displaystyle E,}{\displaystyle E,} and {\displaystyle F.}F.
 *  The relation of one sequence being the subsequence of another is a preorder.
 *  Subsequences can contain consecutive elements which were not consecutive in the original sequence. 
 * A subsequence which consists of a consecutive run of elements from the original sequence, 
 * such as {\displaystyle \langle B,C,D\rangle ,}{\displaystyle \langle B,C,D\rangle ,} from {\displaystyle \langle A,B,C,D,E,F\rangle ,}{\displaystyle \langle A,B,C,D,E,F\rangle ,} is a substring. 
 * The substring is a refinement of the subsequence.
 */



// solution one  using a while loop 
// 0(n) T and  0(1)S
function isValidSubsequence(array, sequence) {
    // Write your code here.
  
    let left = 0
    let right = 0
   
    while (left < array.length && right < sequence.length) {
        if(array[left] == sequence[right]){
            right += 1
         }
          left += 1
    }
  
    return right == sequence.length
  }



// solution two  using a for loop
// 0(n) T and  0(1)S
function isValidSubsequence(array, sequence) {
    // Write your code here.
  
    let seq = 0

    // value = 0 ,1 ,2,3,
   
     for(value in array){
        if(seq == sequence.length) break
          if(sequence[seq] == array[value]){
             seq += 1
          }
     }
   
    return seq == sequence.length
  }