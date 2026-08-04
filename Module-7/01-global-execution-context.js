/********************************************************************

            JAVASCRIPT EXECUTION CONTEXT

Before JavaScript executes ANY code,
it creates an Execution Context.

Execution Context contains

1. Memory Creation Phase
2. Code Execution Phase

Execution Context Types

1. Global Execution Context
2. Function Execution Context
3. Eval Execution Context (rare)

********************************************************************/

console.log("Program Started");

var a = 10;

var b = 20;

function add(x, y) {
  return x + y;
}

console.log(add(a, b));

console.log("Program Finished");

/*               JavaScript Engine

                        |

          Creates Global Execution Context

                        |

        +-------------------------------+

        |                               |

 Memory Creation Phase         Code Execution Phase

        |                               |

 Allocate Memory            Execute Line By Line

 */

var a = 10;

var b = 20;

function sum() {}

/* 
Memory

a --------> undefined

b --------> undefined

sum ------> Entire Function

*/
