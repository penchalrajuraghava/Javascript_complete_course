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
