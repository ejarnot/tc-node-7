Object.defineProperty(Error.prototype, "message", {
  configurable: true,
  enumerable: true,
  get() {
    return "custom";
  },
  set() {
    message = "custom";
  },
});

console.log(new Error("shouldn't be this").message);
