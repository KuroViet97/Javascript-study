# Takeaways:
## JS Files
- Single js file should be treated as a mini-program (error handling purpose)

## Strings
- Back-tick (*``*): interpolation (delimited strings)

## Functions
- Special type (sub-type) of object.

## Objects
- typeof `null` is object
- typeof `array` is object
- typeof `function` is function

## Variables
- block-scope: `let`, `const` (cannot be re-assigned, but mutation is possible, therefore `const` should be used with primitive types for clearing confusion).
- function-scope: `var`.

## Comparisions

> Equal
- `===` is not strict and lies in 2 cases `NaN === NaN`, `0 === -0`.
- `===` only uses `identity equality` for object values.
- JS provides `reference identity` comparision, not `structural equality` comparison (bothersome to cover all corner cases).

> Coercive
- `==` AND primitive types are encouraged.
- Operators `(>, <, ..)` use dictionary-like comparisons in case of both sides are `string`.

## Code Organization
- Classes.
- Modules.