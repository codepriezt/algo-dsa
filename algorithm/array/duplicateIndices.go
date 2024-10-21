package test

func containsNearbyDuplicate(nums []int, k int) bool {
	m := make(map[int]int, 0)

	for i, val := range nums {
		if v, ok := m[val]; ok {
			diff := i - v
			if diff < 0 {
				diff = -diff
			}
			if diff <= k {
				return true
			}
		}
		m[val] = i
	}
	return false
}

func singleNumber(nums []int) int {
	if len(nums) == 1 {
		return nums[0]
	}

	elementCounted := make(map[int]int)
	num := 0
	for _, val := range nums {
		elementCounted[val]++
	}

	for key, val := range elementCounted {
		if val == 1 {
			num = key
			break
		}
	}
	return num

}
