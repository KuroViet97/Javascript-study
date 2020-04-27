# Takeways:

## Javascript
- Javascript: scripting language that obeys ECMAScript specification/standardization 

- APIs like **console.\*(), alert()** are a part of web JS environment that follows JS specifications, not JS themselves. There are also similar APIs.

- Consoles/development tools are **NOT** JS environment, the behaviors may be different. Solution: **CHECK SPECIFICATIONS**. 

- Javascript is **multi-paradigm** language (heh, like OOP Typescript)

- Javascript is only **backward-compatible**, on contrary to HTML, CSS.

- For **forward-compatible** problems like new syntax, a *transpiler* came in rescue to make them compatible to older syntax version. Commonly used tool: **Barbel**. Example: *polyfill*.

- Javascript can be argued to be a **compiled language**. Reason: js codes -> parsed into Abstract Syntax Tree (AST) -> converted into binary representation -> executed.


## Web Assembly (WASM)
- Runs on JS Engine
- Convert non-js programs (GO, etc) to the form that JS engine can understand
- Provide binary-packed program that skips parsing/compilation time with minimal processing for execution.
- Will not replace JS. 