/*
function watchTutorialCallback(callback, errorCallback) {
  let userLeft = false;

  if (userLeft) {
    errorCallback("User left.");
  } else {
    callback("Thumbs up and Subscribe!");
  }
}

watchTurorialCallback(
  (message) => {
    console.log(message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);
*/

// let promise = new Promise((resolve, reject) => {
//   let userLeft = Math.round(Math.random());

//   if (userLeft) {
//     reject(new Error("User left."));
//   } else {
//     resolve({ msg: "Thumbs up and subscribe!" });
//   }
// });

// promise
//   .then((value) => {
//     console.log(value.msg);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

async function watchTutorialCallback(callback, errorCallback) {
  let userLeft = Math.round(Math.random());

  if (userLeft) {
    throw "User left.";
  } else {
    return "Thumbs up and Subscribe!";
  }
}

async function giveStatusMessage() {
  try {
    let message = await watchTutorialCallback();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

giveStatusMessage();
