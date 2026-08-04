/********************************************************************

Whenever a function is called,

JavaScript creates

NEW EXECUTION CONTEXT

Each function gets

✔ its own memory
✔ its own execution

********************************************************************/

var num = 100;

function greet(name) {
  var message = "Hello";

  console.log(message, name);
}

greet("Sunny");

/* 
Global Execution Context

|

|---- greet()

        |

        New Function Execution Context

        Memory

        message -> undefined

        name -> undefined


*/
