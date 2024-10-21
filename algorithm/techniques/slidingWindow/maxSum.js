/**
 * 
 * Sliding Window Shrinkable
 * What is the sliding window technique?

   As its name suggests, this technique involves taking a subset of data from a given array or string,
   expanding or shrinking that subset to satisfy certain conditions, hence the sliding effect.
 * 
   Scenario 1: 
 * Sliding Window Technique: The technique can be best understood with the window pane in the bus,
 *  considering a window of length n and the pane which is fixed in it of length k.
 *  Consider, initially the pane is at extreme left i.e., at 0 units from the left. 
 *  Now, co-relate the window with array arr[] of size n and pane with current_sum of size k elements. Now, 
 *  if we apply force on the window, it moves a unit distance ahead. 
 *  The pane will cover the next k consecutive elements. 
 * 

Applying the sliding window technique : 
    1 .We compute the sum of the first k elements out of n terms using a linear loop and store the sum in variable window_sum.
    2. Then we will graze linearly over the array till it reaches the end and simultaneously keep track of the maximum sum.
    3.To get the current sum of a block of k elements just subtract the first element from the previous block and add the last element of the current block.

The below representation will make it clear how the window slides over the array.
 
 */

/**
 * Pseudo code
 * 
 * let array = [5,2,-1,0,3]
 * let size = array.length
 * let k = 4 // suggested number
 * 
 *  // find intial sum of the first k element
 *  
 *   let sum = 5 + 2 + (-1) + 0
 *   let max = sum
 * 
 *   after getting the first sum of k
 *   then run a loop where i is the index of k
 *   and sum is calculated where i is 4 here
 *   sum = sum + array[i] - array[i- k]   i.e sum = 6 + array[4] - array[4 - 4]
 *   
 *   run a comparison to check if the current sum is greater than the max
 *   
 *   if(max > sum)  max = max
 *   else max = sum
 *   return max
 * 
 *   
 *
 */


 // Javascript code for
    // O(n) solution for finding
    // maximum sum of a subarray
    // of size k
    function maxSum(arr, n, k) {
        let max = 0;
        let sum = 0;
        // find initial sum of first k elements
        for (let i = 0; i < k; i++) {
            sum += arr[i];
            max = sum;
        }
        // iterate the array once
        // and increment the right edge
        for (let i = k; i < n; i++) {

            // shrink the window 
            // (1) subtract the value at first element of the previous block and add the last element of the current block at index i
            sum += arr[i] - arr[i - k];
             
            // compare if sum is more than max,
            // if yes then replace
            // max with new sum value
            if (sum > max) {
                max = sum;
            }
        }
        return max;
    }


// solve minimum sub array length
/**
 *  Given an array of positive integers and a positive integer,
    write a function that returns the minimal length of a contiguous subarray,
    where the sum is greater than or equal to the integer being passed in.
    If there isn’t one, return 0.

    minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2 -> [4, 3] is the smallest subarray
    minSubArrayLen([3, 1, 7, 8, 62, 18, 9], 52) // 1 -> [62] is the smallest subarray
    minSubArrayLen([1, 4, 16, 22, 5], 95) // 0
 */

/**
 * 
 * [2,3]
 * []
 * 
 */

function minSubArrayLen(arr, target) {
    let minLength = Infinity
    let sum = 0
    let left = 0
    let right = 0  
    
    while (left < arr.length) {    if (sum >= target) {

        // store the current minimal length
        minLength = Math.min(minLength, (right - left))

        // shrink the window: 
        // (1) subtract the value at left idx
        // (2) move the left panel one index further to the right
        sum -= arr[left]
        left++
      } else if (sum < target && right < arr.length) {

        // expand the window:
        // (1) sum up the current value
        // (2) move the right panel one index further to the right
        sum += arr[right]
        right++
      } else {
        break
      }  }  return minLength === Infinity ? 0 : minLength
  }

minSubArrayLen([2, 3, 1, 2, 4, 3], 7)