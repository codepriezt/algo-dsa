


/**
 * Check if the string is a palindrome
 * @param {string} s
 * @return {boolean}
 */
var checkIfPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        if (s[left] != s[right]) {
            return false;
        }
        
        left++;
        right--;
    }
    
    return true;
}




/**
 * For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and target = 13, return true because 4 + 9 = 13
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var checkForTarget = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        // curr is the current sum
        let curr = nums[left] + nums[right];
        if (curr == target) {
            return true;
        }
        
        if (curr > target) {
            right--;
        } else {
            left++;
        }
    }
    
    return false;
}




/**
 * Given two sorted integer arrays arr1 and arr2, return a new array that combines both of them and is also sorted.
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var combine = function(arr1, arr2) {
    // ans is the answer
    let ans = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i]);
            i++;
        } else {
            ans.push(arr2[j]);
            j++;
        }
    }
    
    while (i < arr1.length) {
        ans.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        ans.push(arr2[j]);
        j++;
    }
    
    return ans;
}



/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0, j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] == t[j]) {
            i++;
        }
        
        j++;
    }
    
    return i == s.length;
};



/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.


Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0
    let right = s.length - 1;
    
    while (left < right ){
       if(left != right){
            let t =  s[left]
            
           s[left] = s[right]
           s[right] = t
           
       }
        left++;
        right--;
        
    } 
};



/**
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order. 
 * 
 * Example 1
 * Input: nums = [-4,-1,0,3,10]
   Output: [0,1,9,16,100]
   Explanation: After squaring, the array becomes [16,1,0,9,100].
   After sorting, it becomes [0,1,9,16,100].
 

   Example 2
   Input: nums = [-7,-3,2,3,11]
   Output: [4,9,9,49,121]
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0
    let right = nums.length -1
    let sqtNums = new Array(nums.length)

    for(let i = nums.length -1; i >=0; i--){
        if( Math.abs(nums[left]) > Math.abs(nums[right]) ){
           sqtNums[i]= nums[left]  * nums[left]
           left++
        }else{
          sqtNums[i]= nums[right] * nums[right]
          right--;
        }
    }
        
    return sqtNums     
};