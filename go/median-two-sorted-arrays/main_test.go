package main

import "testing"

func TestFindMedianSortedArrays(t *testing.T) {
	cases := []struct {
		name  string
		nums1 []int
		nums2 []int
		want  float64
	}{
		{"canonical odd total", []int{1, 3}, []int{2}, 2.0},
		{"canonical even total", []int{1, 2}, []int{3, 4}, 2.5},
	}

	for _, c := range cases {
		t.Run(c.name, func(t *testing.T) {
			got := findMedianSortedArrays(c.nums1, c.nums2)
			if got != c.want {
				t.Errorf("findMedianSortedArrays(%v, %v) = %v, want %v", c.nums1, c.nums2, got, c.want)
			}
		})
	}
}
