// Error Handling Exercise

class InvalidNumberError extends Error {
  name = "InvalidNumberError";

  constructor(message, reason) {
    super(message);

    this.reason = reason;
  }
}

function getUserInput() {
  let input = parseInt(prompt("Provide an even number:"));

  try {
    if (isNaN(input) || input % 2) {
      let reason;
      if (isNaN(input)) {
        reason = "Value cannot be coverted to a number.";
      } else {
        reason = "Number is odd >:(";
      }

      throw new InvalidNumberError(
        "You didn't provide an even number.",
        reason
      );
    } else {
      alert("You passed the test.");
    }
  } catch (error) {
    if (error.name == "InvalidNumberError") {
      alert(error.reason);
      getUserInput();
    } else {
      alert("Internal Error. Come back and try again later.");
    }
  }
}

getUserInput();
