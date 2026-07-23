/*
else if

Used when multiple conditions need to be checked.
*/

let marks = 82;
let grade;

if (marks >= 90) {
  grade = "A+";
} else if (marks >= 80) {
  grade = "A";
} else if (marks >= 70) {
  grade = "B";
} else if (marks >= 60) {
  grade = "C";
} else {
  grade = "Fail";
}

console.log("Grade:", grade);
