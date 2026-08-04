                   JavaScript Engine
                           │
                           ▼
            Global Execution Context
        ┌───────────────────────────┐
        │ 1. Memory Creation Phase  │
        │   • Variables → undefined │
        │   • Functions → full body │
        ├───────────────────────────┤
        │ 2. Execution Phase        │
        │   • Assign values         │
        │   • Execute statements    │
        └───────────────────────────┘

Top
┌──────────────┐
│ three() │
├──────────────┤
│ two() │
├──────────────┤
│ one() │
├──────────────┤
│ Global │
└──────────────┘
Bottom

Global Scope
│
▼
outer()
│
▼
inner()

Lookup:
inner → outer → global

Program Starts
│
▼
let score; (binding created)
│
▼
══════════════════════════════
Temporal Dead Zone (TDZ)
══════════════════════════════
│
▼
score = 100; (initialized)
│
▼
Now score can be accessed safely.

               JavaScript Source Code
                        │
                        ▼
                  Lexical Analyzer
                        │
                        ▼
                      Parser
                        │
                        ▼
             Abstract Syntax Tree (AST)
                        │
                        ▼
                 Ignition Interpreter
                        │
                        ▼
               Bytecode Generation
                        │
                        ▼
           TurboFan Optimizing Compiler
                        │
                        ▼
               Optimized Machine Code
                        │
                        ▼
                     CPU Executes

Global Execution Context

┌────────────────────────────────────┐
│ Variable Environment │
│ │
│ a → undefined │
│ b → undefined │
│ add → Function Object │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│ Lexical Environment │
│ Outer = null │
└────────────────────────────────────┘

                  RAM

     STACK                     HEAP

┌─────────────┐ ┌─────────────────┐
│ number=10 │ │ Object #102 │
│ flag=true │ │ { │
│ user ------─┼────────►│ name:"Sunny" │
└─────────────┘ │ age:22 │
│ } │
└─────────────────┘

Global Scope
│
├── company = Google
│
└── outer()
│
├── department = AI
│
└── inner()
│
├── employee = Sunny
│
└── Lookup
│
▼
employee
department
company

Top
┌──────────────────────────────┐
│ multiply() │
├──────────────────────────────┤
│ add() │
├──────────────────────────────┤
│ calculate() │
├──────────────────────────────┤
│ Global Execution Context │
└──────────────────────────────┘
Bottom

                JavaScript Runtime

           ┌────────────────────┐
           │     Call Stack     │
           └─────────┬──────────┘
                     │
             Executes Synchronous
                     │
                     ▼
           ┌────────────────────┐
           │     Web APIs       │
           └─────────┬──────────┘
                     │
     ┌───────────────┴──────────────┐
     │                              │
     ▼                              ▼

Microtask Queue Callback Queue
(Promise.then) (setTimeout)

             └──────────────┬──────────────┘
                            ▼
                      Event Loop
                            ▼
                       Call Stack
