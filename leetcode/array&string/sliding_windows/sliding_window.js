

/** Example 1
 * Given an array of positive integers nums and an integer k, find the length of the longest subarray whose sum is less than or equal to k
 * nums = [3, 1, 2, 7, 4, 2, 1, 1, 5]
 * k = 8
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findLength = function(nums, k) {
    // curr is the current sum of the window
    let left = 0, curr = 0, ans = 0;
    for (let right = 0; right < nums.length; right++) {
        curr += nums[right];
        while (curr > k) {
            curr -= nums[left];
            left++;
        }
        
        ans = Math.max(ans, right - left + 1);
    }
    
    return ans;
}



/**
 * You are given a binary string s (a string containing only "0" and "1"). You may choose up to one "0" and flip it to a "1". 
 * What is the length of the longest substring achievable that contains only "1"? 
 * @param {string} s
 * @return {number}
 */
var findLength = function(s) {
    // curr is the current number of zeros in the window
    let left = 0, curr = 0, ans = 0;
    for (let right = 0; right < s.length; right++) {
        if (s[right] == "0") {
            curr++;
        }
        
        while (curr > 1) {
            if (s[left] == "0") {
                curr -= 1;
            }
            left++;
        }
        
        ans = Math.max(ans, right - left + 1);
    }
    
    return ans;
}


/**
 * SubArray Product Less than K (https://leetcode.com/problems/subarray-product-less-than-k/)

   Given an array of positive integers nums and an integer k, return the number of subarrays where the product of all the elements in the subarray is strictly less than k.

   For example, given the input nums = [10, 5, 2, 6], k = 100, the answer is 8. The subarrays with products less than k are:

   [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) {
        return 0;
    }

    let ans = 0, left = 0, curr = 1;
    
    for (let right = 0; right < nums.length; right++) {
        curr *= nums[right];
        while (curr >= k) {
            curr /= nums[left];
            left++;
        }
        
        ans += right - left + 1;
    }
    
    return ans;
};



/**  Maximum Average Subarray I
 * 
 *  You are given an integer array nums consisting of n elements, and an integer k.
 * 
    Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.
    Any answer with a calculation error less than 10-5 will be accepted.
  *
  * Input: nums = [1,12,-5,-6,50,3], k = 4
    Output: 12.75000
    Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

    Input: nums = [5], k = 1
    Output: 5.00000

    Constraints:
    n == nums.length
    1 <= k <= n <= 105
    -104 <= nums[i] <= 104

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var curr = 0
    for (let i = 0; i < k; i++){
        curr += nums[i]
    }
    
    let ans = curr
    
    for ( let i = k; i < nums.length; i++){
          curr += nums[i] - nums[i - k];
          ans = Math.max(ans, curr);
    }
    
    return ans / k
};



/**
 * Max Consecutive Ones III
 * 
 * Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
 * 
 * Example 1
 * Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
    Output: 6
    Explanation: [1,1,1,0,0,1,1,1,1,1,1]
    Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

    Example 2
    Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
    Output: 10
    Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
    Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    
    let left  =0
    let max_length= 0
    
    
    for (let right = 0 ; right < nums.length; right++){
            if (nums[right] == 0){
                k -= 1
            }
        
            while (k < 0) {
                 if (nums[left] == 0){
                    k += 1  
                 }
                left++
            }
        
            max_length = Math.max(max_length, right - left + 1)
    }
    
    return max_length
};