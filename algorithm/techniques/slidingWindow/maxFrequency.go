package slidingwindow

import "sort"

/**


Sliding Window Non Shrinkable

The frequency of an element is the number of times it occurs in an array.

You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1.

Return the maximum possible frequency of an element after performing at most k operations.



:::Explaination:::

Why is (j - i + 1) * A[j] - sum <= k valid?
(j - i + 1) is the length of the window [i, j]. We want to increase all the numbers in the window to equal A[j],
 the number of operations needed is (j - i + 1) * A[j] - sum which should be <= k.
  For example, assume the window is [1,2,3],
increasing all the numbers to 3 will take 3 * 3 - (1 + 2 + 3) operations.

*/

func maxFrequency(nums []int, k int) int {
	sort.Ints(nums)
	windowStart := 0
	total := 0
	var windowEnd int
	for windowEnd = 0; windowEnd < len(nums); windowEnd++ {
		total += nums[windowEnd]

		if (windowEnd-windowStart+1)*nums[windowEnd]-total > k {
			total -= nums[windowStart]
			windowStart++
		}
	}
	return windowEnd - windowStart // There must be a maximum window of size `j - i`.
}

// OR

func maxFrequencyII(nums []int, k int) int {
	sort.Ints(nums)

	windowStart := 0
	result, sum := 1, 0
	for windowEnd := 0; windowEnd < len(nums); windowEnd++ {
		sum += nums[windowEnd]

		// do we have enough K to fill in the square?
		if nums[windowEnd]*(windowEnd-windowStart+1) > sum+k {
			// no we don't and we move the left side
			sum -= nums[windowStart]
			windowStart++
		}

		result = max(result, windowEnd-windowStart+1)
	}
	return result
}

func max(a int, b int) int {
	if a > b {
		return a
	}
	return b
}
