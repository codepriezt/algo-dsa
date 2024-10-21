package subString

/*
Given a string s, find the length of the longest substring without repeating characters.

A substring is a contiguous non-empty sequence of characters within a string.
*/

func lengthOfLongestSubstring(s string) int {

	windowStart, windowEnd := 0, 0
	duplicate := 0
	list := [128]int{}

	for windowEnd < len(s) {
		list[s[windowEnd]]++
		if list[s[windowEnd]] == 2 {
			duplicate++
		}
		windowEnd++
		if duplicate > 0 {
			list[s[windowStart]]--
			if list[s[windowStart]] == 1 {
				duplicate--
			}
			windowStart++
		}
	}

	return windowEnd - windowStart

}
