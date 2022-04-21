# JavaScript Interview Questions

1. What are the different _data types_ in JS?

- Primitive
  - string
  - number
  - null
  - undefined
  - boolean
  - bigint
  - symbol
- Structured/Non-Primitive
  - object (includes functions, arrays, maps, sets, HTMLCollections, et al)

2. Is JS _statically typed_ or _dynamically typed_ language? What do they mean?

   - JS is dynamically typed, meaning we do not have to defined types for variables, functions, parameters, etc.

3. What is the difference between `==` and `===` operators?

   - `==`, loose equality (will use type coercion to convert both types to the same data type, to then check value equality)
   - `===`, strict equality (checks for value equality without using type coercion)

4. What is _implicit Type Coercion_ in JS?

   - When the JS interpreter converts data types without explicit code defining it to do so
   - Example:

   ```js
   // Concatenation
   1 + "1" == "11";
   // Loose Equality
   1 == "1"; // true
   // Less than, Greater than, etc
   1 > "12";
   ```

5. What is _hoisting_ in JS?

   - Being able to reference or call a value or function within a program/scope, before that value is defined in the source code.
   - Example:

   ```js
   add(1, 2);

   function add(a, b) {
     return a + b;
   }
   ```

6. What is _Scope_ in JS?

   - Levels of visibility/access between blocks of code in JS
   - Example:

   ```js
   if (val == 1) {
     let name = "Ben";
   }

   name; // Reference Error
   ```

7. What is _passed by value_ and _passed by reference_?

   - Primitive values are passed by value, non-primitive are passed by reference
   - When we pass primitive values, we pass a copy of the value
   - When we pass non-primitive values, we pass a _reference_, or memory address, not the value itself
   - Example:

   ```js
   let a = "ben";
   let b = a;
   a = 7;
   console.log(b); // "ben"

   let c = { name: "Ben" };
   let d = c;
   c.name = 7;
   console.log(d.name); // 7
   ```

8. What are _Higher Order Functions_ in JS?

   - A function that acts on another function by:
     1. Function that takes another function as a parameter
     2. Function that returns another function value

9. What are _callbacks_?

   - The callback is the function used by a HOF
   - Example:

   ```js
   function math(oper, val1, val2) {
     return oper(val1, val2);
   }

   function add(x, y) {
     return x + y;
   }

   math(add, 1, 2); // returns 3
   ```

10. What are object _prototypes_?

    - Objects that are models/blueprints used when creating/defining other objects
    - Objects created from prototypes _inherit_ the prototype's properties and methods
    - Class syntax is _syntax sugar_ for using prototypes in JS
