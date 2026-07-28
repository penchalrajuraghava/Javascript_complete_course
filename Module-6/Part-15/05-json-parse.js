/*
=========================================
JSON.parse()
=========================================
*/

const json = `{
    "name":"Sunny",
    "salary":60000
}`;

const employee = JSON.parse(json);

console.log(employee);
