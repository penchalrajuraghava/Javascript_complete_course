console.log("Hello JavaScript");

// Most Beginners thinks

/* 
Program
↓

Output */

/* 
              You Write Code
                     │
                     ▼
           JavaScript Source File
                     │
                     ▼
              Browser Reads File
                     │
                     ▼
           JavaScript Engine Starts
                     │
                     ▼
                Lexical Analysis
                     │
                     ▼
                  Tokenization
                     │
                     ▼
                    Parsing
                     │
                     ▼
           Abstract Syntax Tree (AST)
                     │
                     ▼
          Interpreter Generates Bytecode
                     │
                     ▼
        Optimizing Compiler Improves Code
                     │
                     ▼
               Machine Instructions
                     │
                     ▼
                  CPU Executes
                     │
                     ▼
                    Output
*/

let age = 25;

/* 
let
age
=
25
; */

/* 
let age = 25;

↓

let

↓

age

↓

=

↓

25

↓

;
*/

// abstract syntax tree

let age = 25;

/* 
Program
│
├── VariableDeclaration
│
├── Identifier (age)
│
└── Literal (25)
*/

let x = 10;
let y = 20;

console.log(x + y);

/* 
Program
│
├── VariableDeclaration
│      │
│      ├── x
│      └── 10
│
├── VariableDeclaration
│      │
│      ├── y
│      └── 20
│
└── CallExpression
       │
       ├── console.log
       └── BinaryExpression
               │
               ├── x
               └── y
*/
