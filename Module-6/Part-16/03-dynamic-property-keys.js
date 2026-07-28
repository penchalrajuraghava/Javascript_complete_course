/*
=========================================
Dynamic Property Keys
=========================================
*/

function createEmployee(key, value) {
  return {
    [key]: value,
  };
}

console.log(createEmployee("salary", 60000));
