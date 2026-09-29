package main

import "fmt"

func simulate(initial []int, days int) int {
	counter := [9]int{}

	for _, timer := range initial {
		counter[timer]++
	}

	for i := 0; i < days; i++ {
		base := counter[0]
		counter[0] = counter[1]
		counter[1] = counter[2]
		counter[2] = counter[3]
		counter[3] = counter[4]
		counter[4] = counter[5]
		counter[5] = counter[6]
		counter[6] = base + counter[7]
		counter[7] = counter[8]
		counter[8] = base
	}
	sum := 0
	for _, count := range counter {
		sum += count
	}

	return sum
}

var fish = []int{3, 4, 3, 1, 2}

func main() {
	fmt.Println("Part 1 (80 days):", simulate(fish, 80))
	fmt.Println("Part 2 (256 days):", simulate(fish, 256))
}
