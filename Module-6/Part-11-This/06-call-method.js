/*
=========================================
call()
=========================================
*/

function introduce(city) {
  console.log(this.name);
  console.log(city);
}

const person = {
  name: "Sunny",
};

introduce.call(person, "Hyderabad");
