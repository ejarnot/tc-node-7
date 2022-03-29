// Arrays and Higher Order Functions

function plus(initialValue) {
  return function (num) {
    return initialValue + num;
  };
}

const plus100 = plus(100);
const plus1 = plus(1);

plus1(100); // 101
plus100(50); // 150

const start = Date.now();

let runners = [
  {
    id: 1,
    name: "Ben",
    start,
  },
  {
    id: 2,
    name: "Seth",
    start,
  },
  {
    id: 3,
    name: "Cruz",
    start,
  },
  {
    id: 4,
    name: "Michael",
    start,
  },
  {
    id: 5,
    name: "John",
    start,
  },
];

console.log(runners);

function randomToN(n) {
  return Math.floor(Math.random() * n + 1);
}

runners.forEach((runner, i, arr) => {
  runner.end = runner.start + randomToN(100);
});

console.log(runners);

runners.sort((runnerA, runnerB) => {
  if (runnerA.end - runnerA.start > runnerB.end - runnerB.start) {
    return 1;
  } else {
    return -1;
  }
});

// Prints a report of all durations

runners.forEach((runner, i, arr) => {
  console.log(
    `${runner.name} finished in ${runner.end - runner.start} second(s).`
  );
});

// Avg Finish Time
let avgDuration =
  runners.reduce((sum, runner) => {
    return sum + (runner.end - runner.start);
  }, 0) / runners.length;

console.log(`Avg Finish Time: ${avgDuration} seconds(s).`);

// Reduce to fastest, slowest, avg time
let stats = runners.reduce(
  (stats, runner, index, arr) => {
    let duration = runner.end - runner.start;
    runner.duration = duration;

    // Checks to see if the fastest has been se
    // if yes, check to see if this runner has the fastest time
    // If neither, run the same checks for the slowest time
    if (!stats.fastest || runner.duration < stats.fastest.duration) {
      stats.fastest = runner;
    } else if (!stats.slowest || runner.duration > stats.slowest.duration) {
      stats.slowest = runner;
    }

    // Calculates the sum of durations
    stats.avg += runner.duration;

    // If the last runner, calculate the avg from the sum / length
    if (index == arr.length - 1) {
      stats.avg /= arr.length;
    }

    return stats;
  },
  {
    fastest: null,
    slowest: null,
    avg: null,
  }
);

console.log(stats);
