import { expect, test } from "@jest/globals";
import { countLanternfish } from "./lanternfish.ts";

// Expected values below are verified against an independent frequency-bucket
// reference implementation, not derived from countLanternfish itself.
// Day 18 and 80 for the sample set are the puzzle's published example
// figures; day 256 is the actual part 2 target (365 isn't in the puzzle —
// included anyway as an extra check). All other sets/day combinations are
// additional regression coverage.
test.each([
  { name: "sample set", fish: [3, 4, 3, 1, 2], days: 18, want: 26 },
  { name: "sample set", fish: [3, 4, 3, 1, 2], days: 80, want: 5934 },
  { name: "sample set", fish: [3, 4, 3, 1, 2], days: 256, want: 26984457539 },
  { name: "sample set", fish: [3, 4, 3, 1, 2], days: 365, want: 358256077041735 },

  { name: "single fish, mid timer", fish: [4], days: 18, want: 4 },
  { name: "single fish, mid timer", fish: [4], days: 80, want: 1034 },
  { name: "single fish, mid timer", fish: [4], days: 256, want: 4726100874 },
  { name: "single fish, mid timer", fish: [4], days: 365, want: 63221612083260 },

  { name: "all fish about to spawn", fish: [0, 0, 0, 0, 0], days: 18, want: 35 },
  { name: "all fish about to spawn", fish: [0, 0, 0, 0, 0], days: 80, want: 7105 },
  { name: "all fish about to spawn", fish: [0, 0, 0, 0, 0], days: 256, want: 33515435820 },
  { name: "all fish about to spawn", fish: [0, 0, 0, 0, 0], days: 365, want: 448744652339080 },

  { name: "one of every timer value", fish: [0, 1, 2, 3, 4, 5, 6, 7, 8], days: 18, want: 44 },
  { name: "one of every timer value", fish: [0, 1, 2, 3, 4, 5, 6, 7, 8], days: 80, want: 9603 },
  { name: "one of every timer value", fish: [0, 1, 2, 3, 4, 5, 6, 7, 8], days: 256, want: 43847094262 },
  { name: "one of every timer value", fish: [0, 1, 2, 3, 4, 5, 6, 7, 8], days: 365, want: 583383576171814 },

  { name: "larger mixed set", fish: [1, 1, 2, 5, 0, 3, 4, 6, 0, 2, 5, 1], days: 18, want: 66 },
  { name: "larger mixed set", fish: [1, 1, 2, 5, 0, 3, 4, 6, 0, 2, 5, 1], days: 80, want: 14420 },
  { name: "larger mixed set", fish: [1, 1, 2, 5, 0, 3, 4, 6, 0, 2, 5, 1], days: 256, want: 65930072319 },
  { name: "larger mixed set", fish: [1, 1, 2, 5, 0, 3, 4, 6, 0, 2, 5, 1], days: 365, want: 877010062295651 },
])("$name — countLanternfish($fish, $days) = $want", ({ fish, days, want }) => {
  expect(countLanternfish(fish, days)).toBe(want);
});
