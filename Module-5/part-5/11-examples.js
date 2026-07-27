/*
==========================================================
Topic: Real World Examples
==========================================================
*/

const employees = ["Sunny", "Rahul", "Anil", "Kiran"];

const [manager, teamLead, ...developers] = employees;

console.log(manager);

console.log(teamLead);

console.log(developers);

// Clone and Update

const updatedEmployees = [...employees, "David"];

console.log(updatedEmployees);
