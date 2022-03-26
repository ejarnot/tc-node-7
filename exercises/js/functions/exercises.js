// Exercise 1

// Prints odds from 1 to n
function printOdds(n) {
  for (let i = 1; i <= n; i++) {
    // Only print odds
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

printOdds(10); // 1 3 5 7 9
printOdds(100); // 1 3 ... 99
printOdds(5); // 1 3 5

// Exercise 2

// Print yes they can drive, or no they can't
// based on name and age inputs
// you must be 16 to drive
function checkAge(age, name = "stranger") {
  if (!parseInt(age) && age !== 0) {
    console.log("You didn't give me a valid age.");
  } else {
    if (age >= 16) {
      // old enough to drive
      console.log(`Congrats ${name}! You are old enough to drive.`);
    } else {
      // too young to drive
      console.log(
        `Sorry ${name}... You must wait ${
          16 - age
        } year(s) until you can drive.`
      );
    }
  }
}

checkAge(21, "Ben");
checkAge(16);
checkAge(14, "Seth");
checkAge();
checkAge("twelve");

// Exercise 3

function describePointLocation(x, y) {
  if (y == 0 || x == 0) {
    // point is on an axis
    let axisLocation;

    if (y == 0 && x == 0) {
      axisLocation = "both axes";
    } else if (x == 0) {
      axisLocation = "x axis";
    } else if (y == 0) {
      axisLocation = "y axis";
    }

    console.log(`Point is on ${axisLocation}.`);
  } else {
    // determine what quandrant
    let quadrant = 4;

    if (x > 0 && y > 0) {
      // quad 1
      quadrant = 1;
    } else if (x < 0 && y > 0) {
      // quad 2
      quadrant = 2;
    } else if (x < 0 && y < 0) {
      // quad 3
      quadrant = 3;
    }

    console.log(`Point is in quadrant ${quadrant}.`);
  }
}

describePointLocation(0, 1);
describePointLocation(1, 0);
describePointLocation(0, 0);
describePointLocation(21, 61);
describePointLocation(-1, 101);
describePointLocation(-91, -1);
describePointLocation(1, -51);

// Exercise 4

function describeTriangle(sideA, sideB, sideC) {
  // Is the triangle valid?
  if (sideA + sideB > sideC) {
    // determine type of triangle
    if (sideA == sideB && sideA == sideC) {
      console.log("Equilateral triangle");
    } else if (sideA == sideB || sideB == sideC || sideA == sideC) {
      console.log("Isosceles triangle");
    } else {
      console.log("Scalene triangle");
    }
  } else {
    console.log("Invalid triangle");
  }
}

describeTriangle(1, 2, 3);
describeTriangle(1, 2, 2);
describeTriangle(3, 3, 3);
describeTriangle(3, 4, 6);

// Exercise 5

/*
15 days used, 15 days remaining
Average daily use: 3.333 GB/day
You are EXCEEDING your average daily use (3.73 GB/day),
continuing this high usage, you'll exceed your data plan by
11.9 GB.
To stay below your data plan, use no more than 2.93 GB/day.
*/

const dataReport = (dataLimit, day, usage) => {
  const cycleLength = 30;
  let avgDailyUse = usage / day;
  let avgSuggestedUse = dataLimit / cycleLength;
  let estimatedUse = (cycleLength - day) * avgDailyUse;
  let status;
  let feedback;

  if (avgDailyUse > avgSuggestedUse) {
    status = "EXCEEDING";
    feedback = `exceed your data plan by ${estimatedUse} GB`;
  } else if (avgDailyUse < avgSuggestedUse) {
    status = "UNDER";
    feedback = `lose ${estimatedUse} GB`;
  } else {
    status = "ON TRACK WITH";
    feedback = `use all of your data`;
  }

  let output = `${day} day(s) used, ${
    cycleLength - day
  } day(s) remaining.\n Average daily use: ${avgDailyUse.toFixed(2)} GB/day.\n You are ${status} your average daily use (${avgDailyUse.toFixed(2)} GB/day), continuing this usage rate, you'll ${feedback}.`;

  if (status !== "ON TRACK WITH") {
    let correctedDailyUse = (dataLimit - usage) / (cycleLength - day);
    output += `\nTo use all of your data without going over, use no more than ${correctedDailyUse.toFixed(2)} GB/day.`;
  }

  console.log(output);
};

dataReport(50, 5, 4);
dataReport(50, 15, 34);
dataReport(50, 15, 25);
