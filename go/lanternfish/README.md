# Lanternfish — Advent of Code 2021, Day 6

Problem: https://adventofcode.com/2021/day/6

## Problem

You're given the initial internal timer of every lanternfish in a school, as
a comma-separated list of integers (e.g. `3,4,3,1,2`) — one value per fish.

Each day:
- Every fish's timer decreases by 1.
- When a fish's timer would go below 0, it instead resets to `6`, and the
  fish spawns a new fish with a timer of `8`.

So a fish spawns every 7 days once established, and a newly spawned fish
takes 9 days (timer `8` counting down) before its first spawn.

## Input

Paste your personal puzzle input (from https://adventofcode.com/2021/day/6/input,
after logging in) as an inline `[]int` literal in the `fish` variable in
`main.go`.

## Part 1

How many lanternfish would there be after 80 days?

## Part 2

How many lanternfish would there be after 256 days? Same rules — but the
population grows large enough that simulating fish one-by-one won't be
practical at this scale.

## Example

Given starting timers `3,4,3,1,2`:
- After 18 days: 26 fish
- After 80 days: 5934 fish
- After 256 days: not published until part 1 is solved on your account —
  add the expected value to `main_test.go` once you unlock it.

## Running

```
go run .
go test ./...
```
