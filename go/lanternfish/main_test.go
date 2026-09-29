package main

import (
	"fmt"
	"testing"
)

// Expected values below are verified against an independent frequency-bucket
// reference implementation, not derived from simulate itself.
// Day 18 and 80 for the sample set are the puzzle's published example
// figures; day 256 is the actual part 2 target (365 isn't in the puzzle —
// included anyway as an extra check). All other sets/day combinations are
// additional regression coverage.
func TestSimulate(t *testing.T) {
	cases := []struct {
		name    string
		initial []int
		days    int
		want    int
	}{
		{"sample set", []int{3, 4, 3, 1, 2}, 18, 26},
		{"sample set", []int{3, 4, 3, 1, 2}, 80, 5934},
		{"sample set", []int{3, 4, 3, 1, 2}, 256, 26984457539},
		{"sample set", []int{3, 4, 3, 1, 2}, 365, 358256077041735},

		{"single fish, mid timer", []int{4}, 18, 4},
		{"single fish, mid timer", []int{4}, 80, 1034},
		{"single fish, mid timer", []int{4}, 256, 4726100874},
		{"single fish, mid timer", []int{4}, 365, 63221612083260},

		{"all fish about to spawn", []int{0, 0, 0, 0, 0}, 18, 35},
		{"all fish about to spawn", []int{0, 0, 0, 0, 0}, 80, 7105},
		{"all fish about to spawn", []int{0, 0, 0, 0, 0}, 256, 33515435820},
		{"all fish about to spawn", []int{0, 0, 0, 0, 0}, 365, 448744652339080},

		{"one of every timer value", []int{0, 1, 2, 3, 4, 5, 6, 7, 8}, 18, 44},
		{"one of every timer value", []int{0, 1, 2, 3, 4, 5, 6, 7, 8}, 80, 9603},
		{"one of every timer value", []int{0, 1, 2, 3, 4, 5, 6, 7, 8}, 256, 43847094262},
		{"one of every timer value", []int{0, 1, 2, 3, 4, 5, 6, 7, 8}, 365, 583383576171814},

		{"larger mixed set", []int{1, 1, 2, 5, 0, 3, 4, 6, 0, 2, 5, 1}, 18, 66},
		{"larger mixed set", []int{1, 1, 2, 5, 0, 3, 4, 6, 0, 2, 5, 1}, 80, 14420},
		{"larger mixed set", []int{1, 1, 2, 5, 0, 3, 4, 6, 0, 2, 5, 1}, 256, 65930072319},
		{"larger mixed set", []int{1, 1, 2, 5, 0, 3, 4, 6, 0, 2, 5, 1}, 365, 877010062295651},
	}

	for _, c := range cases {
		t.Run(fmt.Sprintf("%s/days=%d", c.name, c.days), func(t *testing.T) {
			got := simulate(c.initial, c.days)
			if got != c.want {
				t.Errorf("simulate(%v, %d) = %d, want %d", c.initial, c.days, got, c.want)
			}
		})
	}
}
