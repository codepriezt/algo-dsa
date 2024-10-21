/**
 * Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

    You may assume that each input would have exactly one solution.


    Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).


Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 */


//solution o(n^2) T | o(1) S

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
     
    nums.sort((a,b) => a-b)
    let sum, diff = 0
    for (let currentNumber = 0 ; currentNumber < nums.length ; currentNumber++){
        let leftPointer =  currentNumber + 1
        let rightPointer = nums.length -1
        while(leftPointer < rightPointer){
             sum = nums[currentNumber] + nums[leftPointer] + nums[rightPointer]
              diff = target - sum
            
             if( Math.abs(target) - Math.abs(sum) < Math.abs(diff) ){
                  diff = target - sum
             }
            
            if(sum < target){
               leftPointer += 1 
            }else{
               rightPointer -= 1
            }
            
             if(diff == 0){break}
               
        }
    }
    
   return target - diff
};
