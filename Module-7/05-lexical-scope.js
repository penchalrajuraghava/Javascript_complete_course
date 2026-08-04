/********************************************************************

LEXICAL SCOPE

Functions remember

Where they were created

NOT

Where they were called

********************************************************************/

let language = "JavaScript";

function outer() {
  let version = "ES2023";

  function inner() {
    console.log(language);

    console.log(version);
  }

  inner();
}

outer();

/* 
Global

language

|

outer

version

|

inner

*/
