/*
=========================================
apply()
=========================================
*/

function introduce(city, country) {
  console.log(this.name);
  console.log(city);
  console.log(country);
}

const employee = {
  name: "Rahul",
};

introduce.apply(employee, ["Hyderabad", "India"]);
