# Median of Two Sorted Arrays

Problem: https://leetcode.com/problems/median-of-two-sorted-arrays/ (LeetCode #4, Hard)

## Problem

You're given two sorted integer arrays, `nums1` (size `m`) and `nums2`
(size `n`). Return the median of the two arrays combined.

**The catch:** your solution should run in `O(log(m+n))` time. Merging both
arrays and taking the middle element(s) is `O(m+n)` and won't cut it here —
think about binary-searching a partition point across both arrays instead
of touching every element.

## Examples

- `nums1 = [1, 3]`, `nums2 = [2]` → merged: `[1, 2, 3]` → median = `2.0`
- `nums1 = [1, 2]`, `nums2 = [3, 4]` → merged: `[1, 2, 3, 4]` → median = `2.5`
  (average of the two middle values)

## Running

```
go run .
go test ./...
```
