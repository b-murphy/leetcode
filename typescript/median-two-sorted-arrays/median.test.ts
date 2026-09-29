import { expect, test } from "@jest/globals";
import { findMedianSortedArrays } from "./median.ts";

test.each([
  { name: "canonical odd total", nums1: [1, 3], nums2: [2], want: 2.0 },
  { name: "canonical even total", nums1: [1, 2], nums2: [3, 4], want: 2.5 },
])("$name — findMedianSortedArrays($nums1, $nums2) = $want", ({ nums1, nums2, want }) => {
  expect(findMedianSortedArrays(nums1, nums2)).toBeCloseTo(want, 5);
});
