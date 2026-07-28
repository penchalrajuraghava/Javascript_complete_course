/*
=========================================
Merging Objects
=========================================
*/

const personalInfo = {
  name: "Sunny",
  age: 22,
};

const jobInfo = {
  department: "IT",
  salary: 60000,
};

const employee = {
  ...personalInfo,
  ...jobInfo,
};

console.log(employee);
