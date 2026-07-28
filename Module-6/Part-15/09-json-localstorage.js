/*
=========================================
Local Storage using JSON
=========================================
*/

const student = {
  id: 101,
  name: "Sunny",
};

localStorage.setItem(
  "student",

  JSON.stringify(student),
);

const data = JSON.parse(localStorage.getItem("student"));

console.log(data);
