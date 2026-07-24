/*
Pattern Printing

*
**
***
****
*****
*/

for (let row = 1; row <= 5; row++) {
  let pattern = "";

  for (let col = 1; col <= row; col++) {
    pattern += "*";
  }

  console.log(pattern);
}
