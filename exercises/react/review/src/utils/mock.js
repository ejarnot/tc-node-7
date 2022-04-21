class User {
  constructor(id, name, email, number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.number = number;
  }
}

let dataLength = 100;
let users = [];

for (let i = 0; i < dataLength; i++) {
  users.push(
    new User(i, "Ben Bryant", "bbryant@truecoders.io", "123-456-7890")
  );
}

export async function getUsers() {
  return users;
}
