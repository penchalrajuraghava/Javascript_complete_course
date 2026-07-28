/*
=========================================
Constructor Prototype
=========================================
*/

function Student(name) {
  this.name = name;
}

Student.prototype.study = function () {
  console.log(this.name + " is studying JavaScript.");
};

const student1 = new Student("Sunny");
const student2 = new Student("Rahul");

student1.study();
student2.study();
