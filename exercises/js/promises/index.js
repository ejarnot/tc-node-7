// Promises - Asynchronous JS

let callback = (resolve, reject) => {
  setTimeout(() => {
    let succeed = Math.round(Math.random() * 100) >= 50;
    if (succeed) {
      resolve("Pass");
    } else {
      reject("Fail");
    }
  }, 5000);
};

let succeeded = (value) => {
  console.log(`From the .then: ${value}`);
};

let failed = (error) => {
  console.log(`From the .catch: ${error}`);
};

console.log("Written before the creation of the promise.");

let promise = new Promise(callback);

// promise
//   .then(succeeded)
//   .catch(failed)
//   .finally(() => console.log("Happens after success or failure"));

console.log("Written after the creation of the promise.");

// Async/await

try {
  setTimeout(async () => {
    let result = await asyncFunc();
    console.log(`From the async function: ${result}`);
  }, 5000);
} catch (error) {
  console.log(`From the async failure ${error}`);
}

async function asyncFunc() {
  let succeed = Math.round(Math.random() * 100) >= 50;

  if (succeed) {
    return "Pass";
  } else {
    throw "Fail";
  }
}
