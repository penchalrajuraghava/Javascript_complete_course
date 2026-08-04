/**********************************************************************

SCOPE CHAIN

JavaScript searches variables

Current Scope

↓

Parent Scope

↓

Global Scope

**********************************************************************/

let country = "India";

function one() {
  let state = "AP";

  function two() {
    let city = "Kadapa";

    console.log(city);

    console.log(state);

    console.log(country);
  }

  two();
}

one();

/* 
Global

country

↓

one()

state

↓

two()

city
*/
