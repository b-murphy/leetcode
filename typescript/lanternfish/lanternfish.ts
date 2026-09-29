interface Counters {
  [key: number]: number
}

export function countLanternfish(initial: number[], days: number): number {
  const counters: Counters = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0};

  initial.forEach((timer) => {
    counters[timer] = (counters[timer] || 0) + 1;
  });

  for (let day = 0; day < days; day++) {
    const base: number = counters[0];
    counters[0] = counters[1];
    counters[1] = counters[2];
    counters[2] = counters[3];
    counters[3] = counters[4];
    counters[4] = counters[5];
    counters[5] = counters[6];
    counters[6] = base + counters[7];
    counters[7] = counters[8];
    counters[8] = base;
  }
  
  return Object.values(counters).reduce((sum, count) => sum + count, 0);
}
