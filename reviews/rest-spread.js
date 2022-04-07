// Rest (gather) and Spread Operators

// Rest:

function add(...numArr) {
  return numArr.reduce((sum, num) => sum + num, 0);
}

add(1); // 1
add(1, 2, 23); // 26
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55

// Spread:

let class1 = ["Ben", "Seth", "Cruz", "Amoriss"];
let class2 = ["Michael", "John", "Jeremy", "Brittany", "Phillip"];

let combined = [...class1, ...class2];

let per1 = {
  name: "Ben",
  city: "Hoover",
  lang: "JavaScript",
};

let updatedDetails = {
  city: "Birmingham",
  editor: "VSCode",
};

let updatedPer1 = { ...per1, ...updatedDetails };

/*
{
    name: "Ben",
    city: "Birmingham",
    lang: "JavaScript",
    editor: "VSCode"
}
*/
