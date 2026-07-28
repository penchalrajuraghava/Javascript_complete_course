/*
=========================================
Deep vs Shallow Copy
=========================================
*/

const employee = {
  name: "Sunny",

  address: {
    city: "Hyderabad",
  },
};

const shallowCopy = {
  ...employee,
};

const deepCopy = structuredClone(employee);

shallowCopy.address.city = "Bangalore";

console.log(employee.address.city);

deepCopy.address.city = "Chennai";

console.log(employee.address.city);

console.log(deepCopy.address.city);
