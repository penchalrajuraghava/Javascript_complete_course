/*
=========================================
Optional Chaining
=========================================
*/

const employee = {
  profile: {
    email: "sunny@gmail.com",
  },
};

console.log(employee.profile?.email);

console.log(employee.address?.city);
