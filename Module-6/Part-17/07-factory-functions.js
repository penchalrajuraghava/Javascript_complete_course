/*
=========================================
Factory Functions
=========================================
*/

function createEmployee(name, department) {
  return {
    name,
    department,

    display() {
      console.log(`${this.name} - ${this.department}`);
    },
  };
}

const employee = createEmployee("Sunny", "IT");

employee.display();
