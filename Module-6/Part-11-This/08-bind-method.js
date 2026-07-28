/*
=========================================
bind()
=========================================
*/

function welcome() {
  console.log("Welcome", this.name);
}

const user = {
  name: "Sunny",
};

const greet = welcome.bind(user);

greet();
