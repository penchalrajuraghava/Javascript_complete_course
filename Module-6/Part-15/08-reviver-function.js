/*
=========================================
Reviver Function
=========================================
*/

const json = `{
    "name":"Sunny",
    "age":"22"
}`;

const user = JSON.parse(json, (key, value) => {
  if (key === "age") {
    return Number(value);
  }

  return value;
});

console.log(user);
console.log(typeof user.age);
