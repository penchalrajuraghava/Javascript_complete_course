/*
=========================================
Proxy Pattern
=========================================
*/

const employee = {
  name: "Sunny",
  salary: 60000,
};

const proxy = new Proxy(employee, {
  get(target, property) {
    console.log(`Reading ${property}`);

    return target[property];
  },
});

console.log(proxy.name);
