const username = "soumya das";

const middlename = "ranjan";

function myName() {
  console.log(username);
}

function myMiddleName() {
  console.log(middlename);
}

export default function fullName() {
  console.log(`My full name is ${username} `);
}

export { username, middlename, myName, myMiddleName };
