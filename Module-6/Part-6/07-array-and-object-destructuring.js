/*
=========================================
Array and Object Destructuring
=========================================
*/

const employee = {

    name: "Rahul",
    skills: ["HTML", "CSS", "JavaScript"]

};

const {

    name,
    skills: [firstSkill, secondSkill]

} = employee;

console.log(name);
console.log(firstSkill);
console.log(secondSkill);