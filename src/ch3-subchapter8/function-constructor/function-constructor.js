function UserCredential(username, password) {
  this.username = username;
  this.password = password;
}

const user = new UserCredential("Maudy", "indonesia2020");

console.log(user);
//UserCredential { username: 'Maudy', password: 'indonesia2020' }
console.log(user.username); //Maudy
console.log(user.password); //indonesia2020
