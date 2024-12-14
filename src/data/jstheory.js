export const   JsTheory= [
    {
      "question": "What is the `this` keyword in JavaScript?",
      "answer": "`this` refers to the context in which a function is called. Its value depends on how the function is invoked."
    },
    {
      "question": "What is the `bind()` method in JavaScript?",
      "answer": "The `bind()` method creates a new function that, when invoked, has its `this` value set to a specified object, and optionally pre-defines arguments."
    },
    {
      "question": "What is the `call()` method in JavaScript?",
      "answer": "`call()` is a method that allows you to invoke a function with a specified `this` value and arguments provided individually."
    },
    {
      "question": "What is the `apply()` method in JavaScript?",
      "answer": "`apply()` is similar to `call()`, but instead of passing arguments individually, arguments are passed as an array (or array-like object)."
    },
    {
      "question": "What is the difference between `Object.create()` and `new` in JavaScript?",
      "answer": "`Object.create()` creates a new object with the specified prototype object, while `new` creates an instance of a constructor function."
    },
    {
      "question": "What are `arrow functions` and how are they different from regular functions?",
      "answer": "Arrow functions have a shorter syntax and don't bind their own `this` value, instead inheriting it from the surrounding context."
    },
    {
      "question": "What is the `setTimeout()` function?",
      "answer": "`setTimeout()` is a function that allows you to execute another function after a specified number of milliseconds."
    },
    {
      "question": "What is the `setInterval()` function?",
      "answer": "`setInterval()` is a function that allows you to execute another function repeatedly at fixed time intervals."
    },
    {
      "question": "What is a `closure` in JavaScript?",
      "answer": "A closure is a function that remembers its lexical scope, even when the function is executed outside of that scope."
    },
    {
      "question": "What is the difference between `null` and `undefined`?",
      "answer": "`null` is an explicit value representing the absence of any object value, while `undefined` means a variable has been declared but has not yet been assigned a value."
    },
    {
      "question": "What is a `callback function`?",
      "answer": "A callback function is a function passed as an argument to another function, which is then executed after a certain event or condition is met."
    },
    {
      "question": "What is event bubbling in JavaScript?",
      "answer": "Event bubbling is the concept where an event propagates from the target element up to the root of the DOM."
    },
    {
      "question": "What is event capturing in JavaScript?",
      "answer": "Event capturing is the opposite of event bubbling, where an event starts from the root element and propagates down to the target element."
    },
    {
      "question": "What is a `promise` in JavaScript?",
      "answer": "A promise is an object representing the eventual completion (or failure) of an asynchronous operation. It provides `then()`, `catch()`, and `finally()` methods for handling asynchronous code."
    },
    {
      "question": "What is the `finally()` method in a promise?",
      "answer": "`finally()` is a method that is executed after a promise is settled, regardless of whether it is resolved or rejected."
    },
    {
      "question": "What is the `async` and `await` syntax in JavaScript?",
      "answer": "`async` is used to define a function as asynchronous, and `await` pauses the execution of the function until the promise is resolved or rejected."
    },
    {
      "question": "What is the difference between `==` and `===`?",
      "answer": "`==` compares two values for equality after performing type conversion, while `===` compares both the value and the type, ensuring strict equality."
    },
    {
      "question": "What is a `generator function`?",
      "answer": "A generator function is a special type of function that can pause its execution and yield control back to the caller. It uses the `yield` keyword."
    },
    {
      "question": "What is `JSON.parse()` and `JSON.stringify()`?",
      "answer": "`JSON.parse()` is used to convert a JSON string into an object, and `JSON.stringify()` is used to convert a JavaScript object into a JSON string."
    },
    {
      "question": "What are `destructuring assignments` in JavaScript?",
      "answer": "Destructuring assignments allow you to unpack values from arrays or objects into distinct variables in a more concise manner."
    },
    {
      "question": "What is the difference between `Object.seal()` and `Object.freeze()`?",
      "answer": "`Object.seal()` prevents the addition or removal of properties but allows modification of existing properties, while `Object.freeze()` prevents any modification, including property modifications."
    },
    {
      "question": "What is `localStorage`?",
      "answer": "`localStorage` is a browser API that allows you to store key-value pairs persistently in the browser, even after the browser is closed."
    },
    {
      "question": "What is `sessionStorage`?",
      "answer": "`sessionStorage` is a browser API that stores key-value pairs for the duration of a page session, meaning data is cleared when the page is closed."
    },
    {
      "question": "What is `Array.prototype.map()`?",
      "answer": "`map()` is an array method that creates a new array by applying a provided function to each element of the original array."
    },
    {
      "question": "What is `Array.prototype.filter()`?",
      "answer": "`filter()` is an array method that creates a new array containing only the elements that satisfy a provided condition."
    },
    {
      "question": "What is `Array.prototype.reduce()`?",
      "answer": "`reduce()` is an array method that applies a function to accumulate a single value from all the elements of the array."
    },
    {
      "question": "What is the `for...in` loop?",
      "answer": "`for...in` is used to iterate over the enumerable properties of an object."
    },
    {
      "question": "What is the `for...of` loop?",
      "answer": "`for...of` is used to iterate over the values of iterable objects like arrays, strings, and maps."
    },
    {
      "question": "What is the `Object.assign()` method?",
      "answer": "`Object.assign()` is used to copy the values of all enumerable properties from one or more source objects to a target object."
    },
    {
      "question": "What are `weak maps` and `weak sets`?",
      "answer": "`WeakMap` and `WeakSet` are collections that store weak references to objects. The objects can be garbage collected if there are no other references to them."
    },
    {
      "question": "What is the `Symbol` data type in JavaScript?",
      "answer": "The `Symbol` data type is a primitive type used to create unique identifiers for object properties."
    },
    {
      "question": "What is the `in` operator?",
      "answer": "`in` checks if a specified property exists in an object or array."
    },
    {
      "question": "What is the `typeof` operator?",
      "answer": "`typeof` returns a string representing the type of a variable or an expression."
    },
    {
      "question": "What is the `constructor` property in JavaScript?",
      "answer": "The `constructor` property is a reference to the function that created the instance of an object."
    },
    {
      "question": "What is the `new` keyword used for?",
      "answer": "The `new` keyword is used to create instances of objects, typically from a constructor function."
    },
    {
      "question": "What is the `slice()` method in JavaScript?",
      "answer": "`slice()` is used to return a shallow copy of a portion of an array or string without modifying the original."
    },
    {
      "question": "What is the difference between `push()` and `unshift()` methods?",
      "answer": "`push()` adds an element to the end of an array, while `unshift()` adds an element to the beginning of an array."
    },
    {
      "question": "What is the purpose of `Array.isArray()`?",
      "answer": "`Array.isArray()` is used to check whether a given value is an array."
    },
    {
      "question": "What is `map()` and how is it different from `forEach()`?",
      "answer": "`map()` creates a new array by applying a function to each element, while `forEach()` executes a function on each element but does not return anything."
    },
    {
      "question": "What is `Promise.all()` in JavaScript?",
      "answer": "`Promise.all()` is used to execute multiple promises in parallel and return a single promise that resolves when all of the input promises have resolved."
    },
    {
      "question": "What is `Object.keys()` method?",
      "answer": "`Object.keys()` returns an array of a given object's own property names."
    },
    {
      "question": "What is `Object.values()` method?",
      "answer": "`Object.values()` returns an array of a given object's own property values."
    },
    {
      "question": "What is `Object.entries()` method?",
      "answer": "`Object.entries()` returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs."
    },
    {
      "question": "What is `String.prototype.includes()` method?",
      "answer": "`includes()` checks if a string contains a certain substring and returns `true` or `false`."
    },
    {
      "question": "What is the `typeof` operator used for?",
      "answer": "`typeof` is used to determine the type of a variable or expression."
    }
  ,      {
      "question": "What is the difference between `let` and `var`?",
      "answer": "`let` has block scope, whereas `var` has function scope. `let` cannot be redeclared in the same scope, while `var` can be redeclared."
    },
    {
      "question": "What are `template literals` and how do they work?",
      "answer": "Template literals are enclosed in backticks (``), and they allow variable interpolation and multi-line strings using `${}` syntax."
    },
    {
      "question": "What are `default parameters` in JavaScript?",
      "answer": "Default parameters allow you to specify default values for function parameters when no argument is provided for those parameters."
    },
    {
      "question": "What are the `spread` and `rest` operators in JavaScript?",
      "answer": "The `spread` operator (`...`) is used to expand an iterable into individual elements, and the `rest` operator (`...`) is used to collect multiple elements into a single array."
    },
    {
      "question": "What is the difference between `null` and `undefined`?",
      "answer": "`null` is an assignment value representing the intentional absence of any value, while `undefined` means a variable is declared but has not been assigned a value."
    },
    {
      "question": "What is `NaN` in JavaScript?",
      "answer": "`NaN` stands for 'Not a Number' and represents a value that is not a legal number, typically returned from invalid mathematical operations."
    },
    {
      "question": "What is `JSON` and how do you work with it in JavaScript?",
      "answer": "JSON (JavaScript Object Notation) is a lightweight data-interchange format. You can parse it using `JSON.parse()` and stringify it using `JSON.stringify()`."
    },
    {
      "question": "What is `destructuring` in JavaScript?",
      "answer": "Destructuring is a syntax that allows unpacking values from arrays or properties from objects into distinct variables."
    },
    {
      "question": "What is the difference between `==` and `===` in JavaScript?",
      "answer": "`==` performs type coercion before comparison, while `===` compares both the value and the type, making it a strict equality check."
    },
    {
      "question": "What is a `promise` in JavaScript?",
      "answer": "A `promise` is an object representing the eventual completion or failure of an asynchronous operation, and it allows chaining of `then()`, `catch()`, and `finally()` methods."
    },
    {
      "question": "What is the purpose of the `finally` block in JavaScript?",
      "answer": "The `finally` block in a `try...catch` statement is always executed after the `try` and `catch` blocks, regardless of whether an error was thrown or not."
    },
    {
      "question": "What is the difference between `setTimeout()` and `setInterval()`?",
      "answer": "`setTimeout()` calls a function once after a specified delay, whereas `setInterval()` repeatedly calls a function at a specified interval."
    },
    {
      "question": "What is the `typeof` operator used for?",
      "answer": "The `typeof` operator returns a string indicating the type of a variable or expression (e.g., 'number', 'string', 'undefined')."
    },
    {
      "question": "What is the `in` operator in JavaScript?",
      "answer": "The `in` operator checks whether a property exists in an object or in an array (by index)."
    },
    {
      "question": "What is the difference between a `function declaration` and a `function expression`?",
      "answer": "A `function declaration` defines a function in a standalone manner, while a `function expression` defines a function as part of an expression (it can be anonymous or named)."
    },
    {
      "question": "What is `hoisting` in JavaScript?",
      "answer": "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the compilation phase. Only declarations are hoisted, not initializations."
    },
    {
      "question": "What is `event delegation`?",
      "answer": "Event delegation is a technique in JavaScript where an event listener is attached to a parent element instead of individual child elements, which makes it more efficient."
    },
    {
      "question": "What are `higher-order functions`?",
      "answer": "Higher-order functions are functions that can take other functions as arguments or return functions as results."
    },
    {
      "question": "What is the `bind()` method in JavaScript?",
      "answer": "The `bind()` method creates a new function that, when called, has its `this` value set to a specified object, and optionally, pre-defines arguments."
    },
    {
      "question": "What is `call()` and `apply()` in JavaScript?",
      "answer": "`call()` and `apply()` are methods used to invoke a function with a specified `this` value, but `call()` passes arguments individually, whereas `apply()` passes them as an array."
    },
    {
      "question": "What is the `new` keyword in JavaScript?",
      "answer": "The `new` keyword is used to create an instance of a user-defined object type or built-in object type that has a constructor function."
    },
    {
      "question": "What is the difference between `Object.freeze()` and `Object.seal()`?",
      "answer": "`Object.freeze()` prevents both adding/removing properties and modifying existing ones, while `Object.seal()` prevents adding/removing properties but allows modification of existing properties."
    },
    {
      "question": "What is `localStorage` and `sessionStorage`?",
      "answer": "Both are Web Storage objects that store data as key-value pairs. `localStorage` persists data across sessions, while `sessionStorage` only stores data for the duration of the page session."
    },
    {
      "question": "What is a `generator` function?",
      "answer": "A generator function is a function that can be paused and resumed. It uses `yield` to produce a sequence of values over time."
    },
    {
      "question": "What is the difference between `forEach()` and `map()`?",
      "answer": "`forEach()` is used to execute a function on each element of an array but does not return anything, whereas `map()` returns a new array with the transformed values."
    },
    {
      "question": "What is the purpose of `Object.assign()`?",
      "answer": "`Object.assign()` is used to copy the properties of one or more source objects to a target object."
    },
    {
      "question": "What are `weak maps` and `weak sets`?",
      "answer": "`WeakMap` and `WeakSet` are similar to `Map` and `Set`, but they allow garbage collection of their keys or values when there are no other references to them."
    },
    {
      "question": "What is a `promise chain`?",
      "answer": "A promise chain is a sequence of `then()` methods that allow you to handle asynchronous operations in a chain, making your code more readable."
    },
    {
      "question": "What are `anonymous functions`?",
      "answer": "Anonymous functions are functions that do not have a name. They are often used as arguments to other functions."
    },
    {
      "question": "What is the `slice()` method in JavaScript?",
      "answer": "`slice()` extracts a shallow copy of a portion of an array and returns a new array without modifying the original one."
    },
    {
      "question": "What is the difference between `push()` and `unshift()` in JavaScript?",
      "answer": "`push()` adds an element to the end of an array, while `unshift()` adds an element to the beginning of an array."
    },
    {
      "question": "What is `NaN` in JavaScript?",
      "answer": "`NaN` stands for 'Not-a-Number' and is returned when an operation that is supposed to return a number cannot produce a valid number."
    },
    {
      "question": "What is the difference between `undefined` and `undeclared`?",
      "answer": "`undefined` refers to a variable that is declared but not initialized, whereas `undeclared` refers to a variable that has not been declared at all."
    },
    {
      "question": "What is a `callback hell`?",
      "answer": "Callback hell refers to the situation where multiple nested callbacks make code difficult to read and maintain. This can be resolved using promises or async/await."
    },
    {
      "question": "What is the `concat()` method in JavaScript?",
      "answer": "`concat()` is used to merge two or more arrays into a single array without modifying the original arrays."
    },
    {
      "question": "What is the purpose of `Array.isArray()`?",
      "answer": "`Array.isArray()` is used to determine whether a given value is an array."
    },
    {
      "question": "What are `setTimeout()` and `setInterval()`?",
      "answer": "`setTimeout()` is used to execute a function after a specified delay, whereas `setInterval()` executes a function repeatedly at a specified interval."
    },
    {
      "question": "What is the `window` object?",
      "answer": "The `window` object represents the global environment in the browser, providing access to browser-specific features like `alert()`, `setTimeout()`, and `document`."
    },
    {
      "question": "What are `arrow functions`?",
      "answer": "Arrow functions provide a shorter syntax for writing functions. They also do not bind their own `this` value, but inherit it from the surrounding context."
    },
    {
      "question": "What is the purpose of `this` in JavaScript?",
      "answer": "`this` refers to the object that is executing the current function, which is set based on how the function is called."
    },
    {
      "question": "What is the `for...of` loop in JavaScript?",
      "answer": "`for...of` is used to iterate over the values of iterable objects like arrays, strings, or maps."
    }
,      {
      "question": "What is the `this` keyword in JavaScript?",
      "answer": "`this` refers to the context in which a function is called, representing the object that owns the method or the global object if in a non-method context."
    },
    {
      "question": "What is the difference between `null` and `undefined` in JavaScript?",
      "answer": "`null` is an assignment value representing no value or object, while `undefined` means a variable has been declared but not assigned a value."
    },
    {
      "question": "What is the event loop in JavaScript?",
      "answer": "The event loop is responsible for executing code, collecting and processing events, and executing sub-tasks like executing callback functions."
    },
    {
      "question": "What are closures in JavaScript?",
      "answer": "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope."
    },
    {
      "question": "What is hoisting in JavaScript?",
      "answer": "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution. This applies to `var`, functions, and `let`/`const` (with some differences)."
    },
    {
      "question": "What is the `call()` method in JavaScript?",
      "answer": "`call()` is a method that allows a function to be invoked with a specified `this` value and arguments passed individually."
    },
    {
      "question": "What is the `apply()` method in JavaScript?",
      "answer": "`apply()` is similar to `call()`, but it takes arguments as an array or array-like object instead of individual arguments."
    },
    {
      "question": "What is the `bind()` method in JavaScript?",
      "answer": "`bind()` creates a new function that, when invoked, has its `this` value set to the provided value, and can also have initial arguments preset."
    },
    {
      "question": "What is the purpose of the `map()` method?",
      "answer": "`map()` creates a new array with the results of applying a provided function to every element of the calling array."
    },
    {
      "question": "What is the purpose of the `filter()` method?",
      "answer": "`filter()` creates a new array with all elements that pass a test implemented by the provided function."
    },
    {
      "question": "What is the `reduce()` method in JavaScript?",
      "answer": "`reduce()` applies a function to an accumulator and each element in the array (from left to right) to reduce it to a single value."
    },
    {
      "question": "What is the purpose of the `concat()` method in JavaScript?",
      "answer": "`concat()` is used to merge two or more arrays or values into a new array without changing the original arrays."
    },
    {
      "question": "What is the `slice()` method in JavaScript?",
      "answer": "`slice()` is used to extract a shallow copy of a portion of an array or string without modifying the original array."
    },
    {
      "question": "What are the differences between `forEach()` and `map()`?",
      "answer": "`forEach()` executes a function on each item of an array but does not return anything, while `map()` creates and returns a new array with the transformed items."
    },
    {
      "question": "What is the purpose of the `setInterval()` function?",
      "answer": "`setInterval()` repeatedly executes a function or evaluates an expression at specified intervals (in milliseconds)."
    },
    {
      "question": "What is the `clearInterval()` function?",
      "answer": "`clearInterval()` is used to cancel a repeating action set with `setInterval()`."
    },
    {
      "question": "What is the difference between synchronous and asynchronous code?",
      "answer": "Synchronous code runs sequentially, one operation after the other, whereas asynchronous code allows non-blocking execution, often involving callbacks or promises."
    },
    {
      "question": "What are Promises in JavaScript?",
      "answer": "A `Promise` represents the eventual completion or failure of an asynchronous operation, and its result can be accessed through `.then()` or `.catch()` methods."
    },
    {
      "question": "What is the `async` keyword in JavaScript?",
      "answer": "`async` is used to define a function that always returns a promise, and within it, `await` can be used to pause execution until the promise resolves."
    },
    {
      "question": "What is the `await` keyword in JavaScript?",
      "answer": "`await` is used inside an `async` function to wait for the resolution of a promise before proceeding with the rest of the code."
    },
    {
      "question": "What is a `generator function`?",
      "answer": "A generator function is a function that can pause its execution and later resume from where it left off using the `yield` keyword."
    },
    {
      "question": "What is a `Set` in JavaScript?",
      "answer": "A `Set` is a collection of unique values, where no duplicate values are allowed, and the order of insertion is preserved."
    },
    {
      "question": "What is a `Map` in JavaScript?",
      "answer": "A `Map` is a collection of key-value pairs, where keys can be of any data type, and values can be anything, preserving the insertion order."
    },
    {
      "question": "What are `WeakMap` and `WeakSet`?",
      "answer": "`WeakMap` and `WeakSet` are similar to `Map` and `Set`, but their keys or values are held weakly, meaning they are garbage collected when no other references exist."
    },
    {
      "question": "What is the `document` object in JavaScript?",
      "answer": "The `document` object represents the web page loaded in the browser, providing access to the structure of the page (DOM) and the ability to manipulate it."
    },
    {
      "question": "What is the `window` object in JavaScript?",
      "answer": "The `window` object represents the global scope in the browser and provides methods like `alert()`, `setTimeout()`, and properties like `document`."
    },
    {
      "question": "What is `localStorage` in JavaScript?",
      "answer": "`localStorage` provides a way to store data in key-value pairs that persist across browser sessions (even when the browser is closed)."
    },
    {
      "question": "What is `sessionStorage` in JavaScript?",
      "answer": "`sessionStorage` stores data for the duration of the page session. Data is lost once the browser tab is closed."
    },
    {
      "question": "What is `JSON.parse()` used for?",
      "answer": "`JSON.parse()` is used to convert a JSON-formatted string into a JavaScript object."
    },
    {
      "question": "What is `JSON.stringify()` used for?",
      "answer": "`JSON.stringify()` converts a JavaScript object or value into a JSON-formatted string."
    },
    {
      "question": "What are the different data types in JavaScript?",
      "answer": "JavaScript data types include primitive types (like `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`) and non-primitive types (`object`, including arrays and functions)."
    },
    {
      "question": "What is a `callback function`?",
      "answer": "A callback function is a function passed as an argument to another function and is executed after the completion of the parent function."
    },
    {
      "question": "What is the `typeof` operator in JavaScript?",
      "answer": "`typeof` is used to return a string indicating the type of a variable or expression."
    },
    {
      "question": "What is the difference between `==` and `===`?",
      "answer": "`==` is the equality operator that performs type coercion before comparing values, while `===` is the strict equality operator that compares both value and type."
    },
    {
      "question": "What is `NaN` in JavaScript?",
      "answer": "`NaN` stands for 'Not-a-Number' and represents an invalid or undefined numeric result in JavaScript."
    },
    {
      "question": "What is a `template literal` in JavaScript?",
      "answer": "A template literal is a string literal that allows embedded expressions, multi-line strings, and variable interpolation using `${}`."
    },
    {
      "question": "What is the purpose of `Object.create()`?",
      "answer": "`Object.create()` is used to create a new object with a specified prototype object and properties."
    },
    {
      "question": "What is the `finally` block in JavaScript?",
      "answer": "`finally` is a block used in a `try...catch` statement that runs after the `try` and `catch` blocks, regardless of whether an exception was thrown."
    },
    {
      "question": "What is the `in` operator in JavaScript?",
      "answer": "`in` is used to check if a specified property exists in an object or in an array (by index)."
    },
    {
      "question": "What is the `delete` operator in JavaScript?",
      "answer": "`delete` is used to remove a property from an object or an element from an array."
    },
    {
      "question": "What is the `for...in` loop used for in JavaScript?",
      "answer": "`for...in` is used to iterate over the properties of an object."
    },
    {
      "question": "What is the `for...of` loop used for in JavaScript?",
      "answer": "`for...of` is used to iterate over the values of iterable objects, like arrays or strings."
    },
    {
      "question": "What is the `with` statement in JavaScript?",
      "answer": "The `with` statement extends the scope chain to include a specified object, but it is considered bad practice because it can lead to confusing code."
    },
    {
      "question": "What is a `Module` in JavaScript?",
      "answer": "A module is a way of organizing and structuring JavaScript code by dividing it into separate files, which can be imported and exported."
    },
    {
      "question": "What is a `proxy` in JavaScript?",
      "answer": "A `Proxy` is an object that wraps another object and intercepts operations (e.g., reading, writing, invoking functions) to define custom behavior."
    }
,
      {
      "question": "What is the difference between `var`, `let`, and `const` in JavaScript?",
      "answer": "`var` is function-scoped, `let` is block-scoped, and `const` is also block-scoped but cannot be reassigned after initialization."
    },
    {
      "question": "What is the purpose of the `setImmediate()` function in JavaScript?",
      "answer": "`setImmediate()` is used to execute a callback function immediately after the current event loop cycle, useful in Node.js environments."
    },
    {
      "question": "What is the `NaN` value in JavaScript, and how can you check if a value is `NaN`?",
      "answer": "`NaN` stands for 'Not-a-Number' and represents an invalid number result in JavaScript. To check for `NaN`, you can use `Number.isNaN()` or `isNaN()`. However, `Number.isNaN()` is more reliable."
    },
    {
      "question": "What is the purpose of `Promise.all()`?",
      "answer": "`Promise.all()` takes an iterable (usually an array) of promises and returns a single promise that resolves when all of the input promises have resolved or rejects if any of the input promises rejects."
    },
    {
      "question": "What is the purpose of `Promise.race()`?",
      "answer": "`Promise.race()` returns a promise that resolves or rejects as soon as any one of the input promises resolves or rejects, whichever happens first."
    },
    {
      "question": "What is the `super` keyword in JavaScript?",
      "answer": "`super` is used to call the constructor or methods of a parent class in JavaScript, allowing inheritance from a superclass."
    },
    {
      "question": "What are the differences between `String`, `StringBuilder`, and `StringBuffer` in JavaScript?",
      "answer": "JavaScript doesn't have `StringBuilder` or `StringBuffer` (common in other languages). In JavaScript, strings are immutable, meaning concatenating or modifying them creates new strings instead of modifying the original."
    },
    {
      "question": "What is the use of the `new` keyword in JavaScript?",
      "answer": "`new` is used to create an instance of an object that is defined by a constructor function or a class. It also ensures that the `this` keyword inside the constructor refers to the newly created object."
    },
    {
      "question": "What is event delegation?",
      "answer": "Event delegation is a technique in which you attach a single event listener to a parent element, which then handles events for all child elements that match a specific selector."
    },
    {
      "question": "What is the difference between `slice()` and `splice()` in JavaScript?",
      "answer": "`slice()` returns a shallow copy of a portion of an array, while `splice()` modifies the array by adding, removing, or replacing elements in place."
    },
    {
      "question": "What are the `for...in` and `for...of` loops in JavaScript?",
      "answer": "`for...in` iterates over the keys of an object or the indices of an array, while `for...of` iterates over the values of an iterable object, such as arrays or strings."
    },
    {
      "question": "What is the purpose of the `eval()` function in JavaScript?",
      "answer": "`eval()` is a function that evaluates a string of JavaScript code and executes it. It's generally discouraged due to security risks and performance concerns."
    },
    {
      "question": "What is a `Module` in JavaScript?",
      "answer": "A module in JavaScript is a piece of code that is encapsulated and can be imported or exported from other files, helping in organizing and structuring the code."
    },
    {
      "question": "What is a `WeakMap` in JavaScript?",
      "answer": "A `WeakMap` is a collection of key-value pairs where the keys are objects and the values can be any value. The keys are held weakly, meaning if there are no other references to the object, the key-value pair is garbage collected."
    },
    {
      "question": "What is the `window` object in JavaScript?",
      "answer": "The `window` object represents the global scope in the browser and provides access to properties like `document`, `localStorage`, and methods like `setTimeout()`."
    },
    {
      "question": "What is the `arguments` object in JavaScript?",
      "answer": "The `arguments` object is an array-like object that provides access to all the arguments passed to a function, even if the function does not explicitly define them."
    },
    {
      "question": "What is the difference between `==` and `===` in JavaScript?",
      "answer": "`==` is the equality operator that performs type coercion before comparing values, whereas `===` is the strict equality operator that compares both value and type without type coercion."
    },
    {
      "question": "What is the purpose of `setTimeout()` in JavaScript?",
      "answer": "`setTimeout()` is used to execute a function after a specified delay in milliseconds."
    },
    {
      "question": "What is the purpose of `clearTimeout()` in JavaScript?",
      "answer": "`clearTimeout()` is used to cancel a timeout that was set with `setTimeout()`."
    },
    {
      "question": "What is `JSON` in JavaScript?",
      "answer": "`JSON` stands for JavaScript Object Notation and is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate."
    },
    {
      "question": "What is the purpose of `JSON.stringify()`?",
      "answer": "`JSON.stringify()` is used to convert a JavaScript object or value to a JSON string."
    },
    {
      "question": "What is the purpose of `JSON.parse()`?",
      "answer": "`JSON.parse()` is used to convert a JSON string into a JavaScript object."
    },
    {
      "question": "What is the `typeof` operator in JavaScript?",
      "answer": "`typeof` is an operator used to determine the type of a variable or expression."
    },
    {
      "question": "What is `NaN` in JavaScript?",
      "answer": "`NaN` stands for 'Not-a-Number' and represents an invalid or undefined numeric result in JavaScript."
    },
    {
      "question": "What is the `globalThis` object?",
      "answer": "`globalThis` is a standardized way of referring to the global object across different JavaScript environments (e.g., browser, Node.js)."
    },
    {
      "question": "What is the `reduce()` method in JavaScript?",
      "answer": "`reduce()` is an array method that applies a function to an accumulator and each element in the array (from left to right) to reduce it to a single value."
    },
    {
      "question": "What is the `filter()` method in JavaScript?",
      "answer": "`filter()` is an array method that creates a new array with all elements that pass a test implemented by the provided function."
    },
    {
      "question": "What is the `map()` method in JavaScript?",
      "answer": "`map()` is an array method that creates a new array populated with the results of calling a provided function on every element in the calling array."
    },
    {
      "question": "What is `async/await` in JavaScript?",
      "answer": "`async/await` is used to work with asynchronous code more comfortably. `async` defines a function that returns a promise, while `await` pauses execution until the promise is resolved."
    },
    {
      "question": "What is a `generator function`?",
      "answer": "A generator function is a function that can pause execution and return an intermediate result using the `yield` keyword, and can resume from where it left off."
    },
    {
      "question": "What is a `proxy` in JavaScript?",
      "answer": "A `Proxy` is a special object that allows you to create custom behavior for fundamental operations on objects like property access, assignment, and function invocation."
    },
    {
      "question": "What is the `bind()` method in JavaScript?",
      "answer": "`bind()` creates a new function that, when invoked, has its `this` value set to the provided value and can optionally have preset arguments."
    },
    {
      "question": "What is the `slice()` method in JavaScript?",
      "answer": "`slice()` returns a shallow copy of a portion of an array into a new array object without modifying the original array."
    },
    {
      "question": "What is the `map()` method used for?",
      "answer": "`map()` is used to transform each element in an array based on a callback function and returns a new array with the transformed elements."
    },
    {
      "question": "What is the difference between `localStorage` and `sessionStorage`?",
      "answer": "`localStorage` persists data even when the browser is closed, while `sessionStorage` only stores data for the duration of the page session (until the tab is closed)."
    },
    {
      "question": "What is the `clear()` method in JavaScript?",
      "answer": "`clear()` is used to remove all elements from a `Set` or `Map` object."
    },
    {
      "question": "What is the `slice()` method used for?",
      "answer": "`slice()` is used to create a shallow copy of a portion of an array or string based on the specified start and end indexes."
    },
    {
      "question": "What is `console.log()` used for?",
      "answer": "`console.log()` is used to output information to the console for debugging purposes."
    },
    {
      "question": "What is a `WeakSet` in JavaScript?",
      "answer": "`WeakSet` is a collection of unique objects where the objects are held weakly. When no other references to the objects exist, they are garbage collected."
    },
    {
      "question": "What is the `finally` block in JavaScript?",
      "answer": "The `finally` block is used in a `try...catch` statement to execute code after the `try` and `catch` blocks, regardless of whether an exception was thrown or not."
    },
    {
      "question": "What is the purpose of `Object.create()` in JavaScript?",
      "answer": "`Object.create()` is used to create a new object with a specified prototype object and properties."
    }
  ,
        {
      "question": "What is an immediately invoked function expression (IIFE)?",
      "answer": "An IIFE is a function that is defined and executed immediately after its creation. It is used to create a local scope to avoid polluting the global namespace."
    },
    {
      "question": "What is hoisting in JavaScript?",
      "answer": "Hoisting is JavaScript's default behavior of moving declarations to the top of their containing scope during the compile phase. Variables declared with `var` and function declarations are hoisted, but only the declarations, not the initializations."
    },
    {
      "question": "What are the differences between `null`, `undefined`, and `NaN`?",
      "answer": "`null` is an assignment value representing no value or object, `undefined` is a type representing a variable that has been declared but not initialized, and `NaN` stands for 'Not-a-Number' and represents a failed mathematical operation."
    },
    {
      "question": "What is a JavaScript promise?",
      "answer": "A promise in JavaScript represents a value that might be available now, or in the future, or never. It is used to handle asynchronous operations."
    },
    {
      "question": "What is the difference between synchronous and asynchronous programming in JavaScript?",
      "answer": "Synchronous programming executes tasks one after another, blocking the program flow, while asynchronous programming allows tasks to execute independently, without blocking the program flow."
    },
    {
      "question": "What is a higher-order function in JavaScript?",
      "answer": "A higher-order function is a function that can take another function as an argument or return a function as a result."
    },
    {
      "question": "What are `async` and `await` in JavaScript?",
      "answer": "`async` defines a function that returns a promise, and `await` pauses the execution of the async function until the promise is resolved."
    },
    {
      "question": "What is an arrow function in JavaScript?",
      "answer": "Arrow functions provide a concise syntax for writing functions and do not have their own `this`. Instead, they inherit `this` from the surrounding lexical context."
    },
    {
      "question": "What is the difference between `call()`, `apply()`, and `bind()` in JavaScript?",
      "answer": "`call()` and `apply()` both invoke a function with a specific `this` value and arguments, with `apply()` accepting arguments as an array. `bind()` creates a new function with a specified `this` value and optional preset arguments but does not invoke the function immediately."
    },
    {
      "question": "What is event delegation in JavaScript?",
      "answer": "Event delegation is a technique in JavaScript where a single event listener is added to a parent element, which listens for events on its child elements using event propagation."
    },
    {
      "question": "What is the `this` keyword in JavaScript?",
      "answer": "`this` refers to the object that is executing the current function. Its value depends on how the function is called."
    },
    {
      "question": "What is closure in JavaScript?",
      "answer": "A closure is a function that retains access to its lexical scope, even when the function is executed outside of that scope."
    },
    {
      "question": "What is destructuring in JavaScript?",
      "answer": "Destructuring is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables."
    },
    {
      "question": "What is the purpose of `Object.create()` in JavaScript?",
      "answer": "`Object.create()` is used to create a new object with a specified prototype object and properties."
    },
    {
      "question": "What is the difference between `Object.freeze()` and `Object.seal()` in JavaScript?",
      "answer": "`Object.freeze()` prevents modification of properties, including addition or deletion, while `Object.seal()` prevents adding or deleting properties but allows modification of existing properties."
    },
    {
      "question": "What is the `spread` operator in JavaScript?",
      "answer": "The spread operator (`...`) is used to expand an iterable object (such as an array or object) into individual elements or properties."
    },
    {
      "question": "What is the `rest` operator in JavaScript?",
      "answer": "The rest operator (`...`) is used to collect multiple elements into a single array, often used in function arguments to handle variable numbers of arguments."
    },
    {
      "question": "What is the purpose of `Array.prototype.forEach()`?",
      "answer": "`forEach()` is an array method that executes a provided function once for each element in the array."
    },
    {
      "question": "What is a `Set` in JavaScript?",
      "answer": "A `Set` is a collection of unique values, where each value can only appear once, and the values are ordered based on insertion."
    },
    {
      "question": "What is a `Map` in JavaScript?",
      "answer": "A `Map` is a collection of key-value pairs, where keys can be of any type, and the values are ordered based on insertion."
    },
    {
      "question": "What is the purpose of the `bind()` method in JavaScript?",
      "answer": "`bind()` returns a new function that, when called, has its `this` keyword set to a specific value and can optionally pass preset arguments."
    },
    {
      "question": "What is a generator function in JavaScript?",
      "answer": "A generator function is a function that can be paused and resumed during its execution using the `yield` keyword."
    },
    {
      "question": "What are template literals in JavaScript?",
      "answer": "Template literals allow for string interpolation and multiline strings, using backticks (`). Variables and expressions can be embedded inside `${}`."
    },
    {
      "question": "What is the purpose of `JSON.stringify()` in JavaScript?",
      "answer": "`JSON.stringify()` is used to convert a JavaScript object or value to a JSON string."
    },
    {
      "question": "What is the purpose of `JSON.parse()` in JavaScript?",
      "answer": "`JSON.parse()` is used to convert a JSON string into a JavaScript object."
    },
    {
      "question": "What is the `typeof` operator in JavaScript?",
      "answer": "`typeof` is an operator used to determine the type of a variable or expression."
    },
    {
      "question": "What is the difference between `==` and `===` in JavaScript?",
      "answer": "`==` performs type coercion and compares values, while `===` compares both the value and type without type coercion."
    },
    {
      "question": "What is the purpose of the `setTimeout()` function in JavaScript?",
      "answer": "`setTimeout()` is used to execute a function after a specified delay in milliseconds."
    },
    {
      "question": "What is the purpose of the `clearTimeout()` function in JavaScript?",
      "answer": "`clearTimeout()` is used to cancel a timeout that was set with `setTimeout()`."
    },
    {
      "question": "What is the purpose of the `setInterval()` function in JavaScript?",
      "answer": "`setInterval()` is used to execute a function repeatedly at a specified interval (in milliseconds)."
    },
    {
      "question": "What is the purpose of the `clearInterval()` function in JavaScript?",
      "answer": "`clearInterval()` is used to stop the repeated execution of a function set by `setInterval()`."
    },
    {
      "question": "What is event bubbling in JavaScript?",
      "answer": "Event bubbling is a mechanism by which an event starts at the most specific target element and then propagates upward to the root of the DOM tree."
    },
    {
      "question": "What is event capturing in JavaScript?",
      "answer": "Event capturing is the opposite of event bubbling. In event capturing, the event is first captured by the outermost element and then propagated inward to the target element."
    },
    {
      "question": "What is `localStorage` in JavaScript?",
      "answer": "`localStorage` allows for storing data persistently on the client’s machine. Data stored in `localStorage` does not expire and remains available even when the browser is closed."
    },
    {
      "question": "What is `sessionStorage` in JavaScript?",
      "answer": "`sessionStorage` stores data for the duration of the page session. It is cleared when the browser tab is closed."
    },
    {
      "question": "What is `Web Storage` in JavaScript?",
      "answer": "Web Storage provides mechanisms for storing key-value pairs on the client side. It includes `localStorage` and `sessionStorage`."
    },
    {
      "question": "What is `NaN` in JavaScript?",
      "answer": "`NaN` stands for 'Not-a-Number' and is a special value that represents an invalid or unrepresentable number."
    },
    {
      "question": "What is the `globalThis` object in JavaScript?",
      "answer": "`globalThis` is a standard way of accessing the global object across different environments (like the browser or Node.js)."
    },
    {
      "question": "What is the `arguments` object in JavaScript?",
      "answer": "The `arguments` object is an array-like object that provides access to all the arguments passed to a function, even if they are not named."
    },
    {
      "question": "What is the `with` statement in JavaScript?",
      "answer": "The `with` statement extends the scope chain to include a specified object, but it is considered bad practice because it can lead to confusing code."
    },
    {
      "question": "What are `WeakMap` and `WeakSet` in JavaScript?",
      "answer": "`WeakMap` and `WeakSet` are similar to `Map` and `Set`, but the key-value pairs in `WeakMap` and elements in `WeakSet` are held weakly, meaning they do not prevent garbage collection."
    },
    {
      "question": "What are the differences between `let` and `const`?",
      "answer": "`let` allows you to declare variables that can be reassigned, while `const` is used to declare variables that cannot be reassigned, but the contents of objects or arrays declared with `const` can be modified."
    },
    {
      "question": "What is the purpose of the `Object.assign()` method in JavaScript?",
      "answer": "`Object.assign()` is used to copy the values of all enumerable properties from one or more source objects to a target object."
    }
,      {
      "question": "What is the event loop in JavaScript?",
      "answer": "The event loop is a mechanism that handles asynchronous callbacks in JavaScript. It allows JavaScript to execute non-blocking operations, using a single thread by processing the event queue and executing code, events, or messages one at a time."
    },
    {
      "question": "What is the difference between `null` and `undefined`?",
      "answer": "`null` is an explicit assignment of no value, while `undefined` indicates that a variable has been declared but not yet assigned a value."
    },
    {
      "question": "What is a closure in JavaScript?",
      "answer": "A closure is a function that retains access to its lexical scope, even when the function is executed outside of that scope."
    },
    {
      "question": "What is the purpose of the `this` keyword in JavaScript?",
      "answer": "`this` refers to the object that is currently executing the function. Its value depends on the context in which the function is invoked."
    },
    {
      "question": "What is a promise in JavaScript?",
      "answer": "A `Promise` is an object representing the eventual completion or failure of an asynchronous operation. It is used to handle asynchronous code in a more manageable way."
    },
    {
      "question": "What is the difference between a `for...in` loop and a `for...of` loop?",
      "answer": "`for...in` is used to iterate over the keys (properties) of an object, while `for...of` is used to iterate over the values of iterable objects like arrays and strings."
    },
    {
      "question": "What is the `apply()` method in JavaScript?",
      "answer": "`apply()` is a method that calls a function with a specified `this` value and an array or array-like object of arguments."
    },
    {
      "question": "What is the difference between `let`, `const`, and `var`?",
      "answer": "`let` and `const` are block-scoped and cannot be redeclared within the same scope, while `var` is function-scoped and can be redeclared in the same scope."
    },
    {
      "question": "What are JavaScript data types?",
      "answer": "JavaScript has seven primitive data types: `String`, `Number`, `BigInt`, `Boolean`, `undefined`, `Symbol`, and `null`, and one non-primitive data type, `Object`."
    },
    {
      "question": "What is the purpose of the `new` keyword in JavaScript?",
      "answer": "The `new` keyword is used to create an instance of a constructor function, setting up the object's prototype chain and executing the constructor."
    },
    {
      "question": "What is the `map()` function in JavaScript?",
      "answer": "`map()` is an array method that creates a new array with the results of calling a provided function on every element in the array."
    },
    {
      "question": "What is the `filter()` function in JavaScript?",
      "answer": "`filter()` is an array method that creates a new array with all elements that pass the test provided in the function."
    },
    {
      "question": "What is the `reduce()` function in JavaScript?",
      "answer": "`reduce()` is an array method that applies a function to an accumulator and each element of the array (from left to right) to reduce it to a single value."
    },
    {
      "question": "What is the purpose of `Object.prototype.hasOwnProperty()`?",
      "answer": "`hasOwnProperty()` is a method used to check whether an object has a specific property as its own, without inheriting it from its prototype chain."
    },
    {
      "question": "What is the difference between `==` and `===` in JavaScript?",
      "answer": "`==` performs type coercion and compares values, while `===` compares both values and types without type coercion."
    },
    {
      "question": "What is a `Set` in JavaScript?",
      "answer": "A `Set` is a collection of unique values in JavaScript, where each value can only appear once."
    },
    {
      "question": "What is a `Map` in JavaScript?",
      "answer": "A `Map` is a collection of key-value pairs where the keys can be of any type, and it maintains the order of insertion."
    },
    {
      "question": "What is the `const` keyword in JavaScript?",
      "answer": "`const` is used to declare variables that cannot be reassigned once initialized, but the content of objects or arrays declared with `const` can still be modified."
    },
    {
      "question": "What is the `Object.create()` method in JavaScript?",
      "answer": "`Object.create()` is a method that creates a new object with the specified prototype object and properties."
    },
    {
      "question": "What is the `typeof` operator in JavaScript?",
      "answer": "`typeof` is an operator used to check the type of a given variable or expression."
    },
    {
      "question": "What are the advantages of using arrow functions in JavaScript?",
      "answer": "Arrow functions provide a concise syntax and do not have their own `this` binding, meaning they inherit `this` from their surrounding context."
    },
    {
      "question": "What is `setTimeout()` and `setInterval()` in JavaScript?",
      "answer": "`setTimeout()` executes a function after a specified time delay, while `setInterval()` repeatedly executes a function at fixed intervals."
    },
    {
      "question": "What is the purpose of the `bind()` method in JavaScript?",
      "answer": "`bind()` is used to create a new function that, when called, has its `this` keyword set to a specified value and allows for preset arguments."
    },
    {
      "question": "What is the purpose of the `call()` method in JavaScript?",
      "answer": "`call()` is used to invoke a function with a specified `this` value and individual arguments."
    },
    {
      "question": "What is a generator function in JavaScript?",
      "answer": "A generator function is a special type of function that can be paused and resumed, and it uses the `yield` keyword to yield control back to the caller."
    },
    {
      "question": "What is the difference between a regular function and an arrow function?",
      "answer": "Arrow functions are more concise, do not have their own `this` context (they inherit it from the enclosing scope), and cannot be used as constructors."
    },
    {
      "question": "What is a `Promise` chain?",
      "answer": "A `Promise` chain is a series of `then()` or `catch()` methods attached to a promise to handle asynchronous operations sequentially."
    },
    {
      "question": "What is the `clearInterval()` method in JavaScript?",
      "answer": "`clearInterval()` is used to stop the repeated execution of a function that was set by `setInterval()`."
    },
    {
      "question": "What is the `clearTimeout()` method in JavaScript?",
      "answer": "`clearTimeout()` is used to stop the execution of a function that was set by `setTimeout()`."
    },
    {
      "question": "What is the difference between `localStorage` and `sessionStorage`?",
      "answer": "`localStorage` stores data with no expiration date, while `sessionStorage` stores data for the duration of the page session and is cleared once the browser or tab is closed."
    },
    {
      "question": "What are `WeakMap` and `WeakSet` in JavaScript?",
      "answer": "`WeakMap` and `WeakSet` are similar to `Map` and `Set`, but they do not prevent their keys or elements from being garbage collected."
    },
    {
      "question": "What is the purpose of `Array.isArray()`?",
      "answer": "`Array.isArray()` is used to determine whether a given value is an array."
    },
    {
      "question": "What is an `IIFE` (Immediately Invoked Function Expression)?",
      "answer": "An IIFE is a function that is defined and executed immediately after its creation, often used to create a local scope."
    },
    {
      "question": "What are `import` and `export` used for in JavaScript?",
      "answer": "`import` is used to import functions, objects, or primitives from other modules, while `export` is used to make them available to other modules."
    },
    {
      "question": "What are default parameters in JavaScript?",
      "answer": "Default parameters allow you to set default values for function parameters if no value is provided when calling the function."
    },
    {
      "question": "What is the `constructor` in JavaScript?",
      "answer": "The `constructor` is a special function that is called when an instance of a class is created. It is used to initialize the object's properties."
    },
    {
      "question": "What is destructuring in JavaScript?",
      "answer": "Destructuring is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables."
    },
    {
      "question": "What is the purpose of `Object.freeze()` in JavaScript?",
      "answer": "`Object.freeze()` is used to prevent the modification of an object’s properties, making it immutable."
    },
    {
      "question": "What is the `super()` function in JavaScript?",
      "answer": "`super()` is used to call the constructor and methods of a parent class in a subclass."
    },
    {
      "question": "What is the difference between `for` and `for...in` loop in JavaScript?",
      "answer": "`for` is used to iterate over a sequence of numbers or array indices, while `for...in` is used to iterate over the enumerable properties of an object."
    },
    {
      "question": "What are template literals in JavaScript?",
      "answer": "Template literals are string literals that allow for embedded expressions and multiline strings, using backticks (`)."
    },
    {
      "question": "What is `async` and `await` in JavaScript?",
      "answer": "`async` is used to define functions that return promises, and `await` is used inside `async` functions to pause execution until a promise is resolved."
    },
    {
      "question": "What are `set` and `get` methods in JavaScript?",
      "answer": "`set` and `get` methods allow you to define custom behavior when setting or getting object properties, often used in classes or with object literals."
    }
  ,      {
        "question": "What is the difference between `slice()` and `splice()` methods in arrays?",
        "answer": "`slice()` returns a shallow copy of a portion of an array, leaving the original array unchanged. `splice()` changes the original array by removing, replacing, or adding elements."
      },
      {
        "question": "What is the `bind()` method in JavaScript?",
        "answer": "`bind()` creates a new function that, when called, has its `this` keyword set to a specific value, and allows for preset arguments to be passed."
      },
      
      {
        "question": "What are the differences between `function` and `arrow` functions?",
        "answer": "Arrow functions have a simpler syntax and do not have their own `this` context, they inherit `this` from the enclosing scope, whereas regular functions create their own `this`."
      },
      {
        "question": "What is the difference between `call()` and `bind()`?",
        "answer": "`call()` immediately invokes a function with a given `this` value and arguments, while `bind()` returns a new function that can be invoked later with a specified `this` and arguments."
      },
      {
        "question": "What is event bubbling in JavaScript?",
        "answer": "Event bubbling is a concept where events propagate from the innermost element (target) to the outermost parent element in the DOM hierarchy."
      },
      {
        "question": "What is the difference between `localStorage` and `sessionStorage`?",
        "answer": "`localStorage` stores data persistently, even when the browser is closed, while `sessionStorage` only stores data for the duration of the page session."
      },
      {
        "question": "What is the purpose of the `console.log()` method?",
        "answer": "`console.log()` is used to print messages, objects, or variables to the browser's console, useful for debugging purposes."
      },
      {
        "question": "What is the `reduce()` method in JavaScript?",
        "answer": "`reduce()` is an array method that applies a function to an accumulator and each element in the array (from left to right) to reduce it to a single value."
      },
      {
        "question": "What is the difference between `let` and `const`?",
        "answer": "`let` allows reassignment of a variable, while `const` does not allow reassignment after it has been assigned. Both are block-scoped."
      },
      {
        "question": "What is the `for...in` loop used for?",
        "answer": "`for...in` is used to iterate over the enumerable properties of an object."
      },
      {
        "question": "What is the `for...of` loop used for?",
        "answer": "`for...of` is used to iterate over iterable objects like arrays, strings, and maps, providing access to their values."
      },
      {
        "question": "What is the `typeof` operator used for?",
        "answer": "The `typeof` operator is used to determine the type of a variable or expression."
      },
      {
        "question": "What is an `IIFE` (Immediately Invoked Function Expression)?",
        "answer": "An `IIFE` is a function that is defined and executed immediately. It's often used to create a local scope and avoid polluting the global namespace."
      },
      {
        "question": "What are the main principles of functional programming in JavaScript?",
        "answer": "Functional programming focuses on functions as first-class citizens, immutability, higher-order functions, and pure functions."
      },
      {
        "question": "What is the use of `setInterval()` in JavaScript?",
        "answer": "`setInterval()` is used to repeatedly execute a function at specified time intervals, defined in milliseconds."
      },
      {
        "question": "What is `undefined` in JavaScript?",
        "answer": "`undefined` is a primitive value that indicates a variable has been declared but has not yet been assigned a value."
      },
      {
        "question": "What is the `JSON.parse()` method in JavaScript?",
        "answer": "`JSON.parse()` converts a JSON string into a JavaScript object."
      },
      {
        "question": "What is the `JSON.stringify()` method in JavaScript?",
        "answer": "`JSON.stringify()` converts a JavaScript object into a JSON string."
      },
      {
        "question": "What are JavaScript modules?",
        "answer": "JavaScript modules allow you to split your code into smaller, reusable pieces. You can use `import` and `export` to manage dependencies between modules."
      },
      {
        "question": "What is the `window` object in JavaScript?",
        "answer": "The `window` object represents the global environment in browsers, providing access to methods and properties like `document`, `setTimeout()`, and `localStorage`."
      },
      {
        "question": "What is a `set` in JavaScript?",
        "answer": "A `Set` is a collection of unique values in JavaScript. It removes duplicate elements and allows for operations like `add()`, `delete()`, and `has()`."
      },
      {
        "question": "What is a `Map` in JavaScript?",
        "answer": "A `Map` is a collection of key-value pairs, where both keys and values can be any data type, unlike regular objects where keys are always strings."
      },
      {
        "question": "What is the `async` keyword in JavaScript?",
        "answer": "The `async` keyword is used to define a function that returns a `Promise`. It allows you to use the `await` keyword inside it to handle asynchronous operations more easily."
      },
      {
        "question": "What is the `await` keyword in JavaScript?",
        "answer": "The `await` keyword is used inside an `async` function to pause execution until the `Promise` is resolved or rejected."
      },
      {
        "question": "What is the purpose of the `fetch()` API in JavaScript?",
        "answer": "`fetch()` is used to make network requests, typically for retrieving resources from the web or interacting with APIs. It returns a `Promise`."
      },
      {
        "question": "What is the `Promise.all()` method in JavaScript?",
        "answer": "`Promise.all()` takes an array of promises and returns a new promise that resolves when all of the input promises have resolved, or rejects if any promise is rejected."
      },
      {
        "question": "What is `Object.assign()` in JavaScript?",
        "answer": "`Object.assign()` is used to copy values from one or more source objects to a target object, allowing for shallow copying of properties."
      },
      {
        "question": "What is `Object.create()` in JavaScript?",
        "answer": "`Object.create()` is used to create a new object with the specified prototype object and properties."
      },
      {
        "question": "What is the `super` keyword in JavaScript?",
        "answer": "`super` is used to call a parent class’s methods and constructor from a subclass."
      },
      {
        "question": "What is the `yield` keyword in JavaScript?",
        "answer": "`yield` is used inside a generator function to pause the function execution and return a value. The function can later be resumed."
      },
      {
        "question": "What is the difference between `let` and `var` in JavaScript?",
        "answer": "`let` is block-scoped and cannot be re-declared in the same scope, while `var` is function-scoped and can be re-declared in the same scope."
      },
      {
        "question": "What are `WeakMap` and `WeakSet` in JavaScript?",
        "answer": "`WeakMap` and `WeakSet` are similar to `Map` and `Set`, but they do not prevent garbage collection of objects used as keys in `WeakMap` or elements in `WeakSet`."
      },
      {
        "question": "What is `new` in JavaScript?",
        "answer": "The `new` keyword is used to create instances of a constructor function, setting up the prototype chain and invoking the constructor."
      },
      {
        "question": "What is the purpose of `Array.prototype.map()`?",
        "answer": "`map()` creates a new array by applying a given function to each element of the original array."
      },
      {
        "question": "What is the purpose of `Array.prototype.filter()`?",
        "answer": "`filter()` creates a new array with all elements that pass a test specified in the given function."
      },
      {
        "question": "What is `prototype` in JavaScript?",
        "answer": "`prototype` is an object associated with every JavaScript function that contains methods and properties that are inherited by instances of that function."
      },
      {
        "question": "What is `this` in JavaScript?",
        "answer": "`this` refers to the context in which a function is called. It points to the object that owns the method or function."
      },
      {
        "question": "What is the purpose of `setTimeout()` in JavaScript?",
        "answer": "`setTimeout()` is used to execute a function after a specified delay in milliseconds."
      },
      {
        "question": "What is `async/await` in JavaScript?",
        "answer": "`async/await` is syntactic sugar for working with promises, making asynchronous code look and behave like synchronous code."
      },
      {
        "question": "What is `undefined` vs `null` in JavaScript?",
        "answer": "`undefined` means a variable has been declared but not assigned a value, while `null` is an assignment value representing no value or object."
      },
    {
      "question": "What is the difference between a shallow copy and a deep copy?",
      "answer": "A shallow copy copies the references to the objects, meaning changes to nested objects will affect the copied object. A deep copy creates a new object and recursively copies all the nested objects, meaning changes won't affect the original."
    },
    {
      "question": "What is the difference between `function declaration` and `function expression`?",
      "answer": "A function declaration is hoisted to the top of its scope and can be called before it's defined. A function expression is not hoisted and can only be called after it's defined."
    },
    {
      "question": "What are `Arrow Functions` and how do they differ from regular functions?",
      "answer": "Arrow functions are a shorthand syntax for defining functions. They don't have their own `this` context, instead inheriting it from the surrounding scope, unlike regular functions which define their own `this`."
    },
    {
      "question": "What are JavaScript’s primitive data types?",
      "answer": "JavaScript's primitive data types include `undefined`, `null`, `boolean`, `number`, `string`, `bigint`, and `symbol`."
    },
    {
      "question": "What is the purpose of `setImmediate` and `process.nextTick` in Node.js?",
      "answer": "`setImmediate` schedules a callback to be executed in the next event loop cycle, while `process.nextTick` schedules a callback to be executed immediately after the current operation completes, before any I/O tasks."
    },
    {
      "question": "What is `debouncing` in JavaScript?",
      "answer": "Debouncing is a technique used to limit the rate at which a function is executed. It's commonly used for events like `scroll` or `resize` to avoid overwhelming the system with too many function calls."
    },
    {
      "question": "What is `throttling` in JavaScript?",
      "answer": "Throttling is a technique that ensures a function is only executed at a specified rate, preventing excessive execution. It's commonly used to limit the number of times an event handler is triggered in a given period."
    },
    {
      "question": "What is the difference between `undefined` and `void 0`?",
      "answer": "`undefined` is a primitive value that represents an uninitialized variable or a function with no return value. `void 0` is a way of explicitly returning `undefined`, and is often used for ensuring consistent behavior across environments."
    },
    {
      "question": "What is the `typeof` operator used for?",
      "answer": "The `typeof` operator is used to determine the data type of a given operand or variable, returning a string that describes the type (e.g., `string`, `number`, `boolean`)."
    },
    {
      "question": "What is the `instanceof` operator in JavaScript?",
      "answer": "`instanceof` is used to check if an object is an instance of a particular class or constructor function. It checks the prototype chain for the specified class."
    },
    {
      "question": "What is the purpose of the `new` keyword in JavaScript?",
      "answer": "The `new` keyword is used to create an instance of a constructor function. It sets up the new object, binds it to the `this` keyword within the constructor, and returns the object."
    },
    {
      "question": "What are template literals in JavaScript?",
      "answer": "Template literals are a way of embedding expressions inside strings using backticks (`` ` ``). They allow for multi-line strings and interpolation with `${}`."
    },
    {
      "question": "What is the difference between `call()` and `apply()`?",
      "answer": "`call()` invokes a function with a specified `this` value and individual arguments, while `apply()` invokes the function with a specified `this` value but takes arguments as an array."
    },
    {
      "question": "What is `Object.freeze()` in JavaScript?",
      "answer": "`Object.freeze()` prevents modifications to an object, including adding new properties, deleting existing ones, and modifying property values."
    },
    {
      "question": "What are higher-order functions in JavaScript?",
      "answer": "Higher-order functions are functions that take other functions as arguments or return functions as their result."
    },
    {
      "question": "What is the `window` object in JavaScript?",
      "answer": "The `window` object represents the global context in the browser environment. It provides access to properties like `document`, `localStorage`, and methods like `alert()`."
    },
    {
      "question": "What is the difference between synchronous and asynchronous code?",
      "answer": "Synchronous code is executed one operation at a time, blocking the execution of subsequent code. Asynchronous code allows operations to run concurrently, enabling other tasks to be performed while waiting for completion."
    },
    {
      "question": "What are JavaScript modules?",
      "answer": "JavaScript modules allow for the organization and separation of code into reusable chunks. They are imported and exported using `import` and `export` statements."
    },
    {
      "question": "What is the event propagation model in JavaScript?",
      "answer": "JavaScript event propagation refers to the way events are handled in the DOM. It includes three phases: capturing phase, target phase, and bubbling phase."
    },
    {
      "question": "What is the purpose of the `eval()` function in JavaScript?",
      "answer": "`eval()` executes a string of JavaScript code within the current execution context. It's generally avoided due to security risks and performance concerns."
    },
    {
      "question": "What is the difference between `slice()` and `splice()` in JavaScript?",
      "answer": "`slice()` creates a shallow copy of a portion of an array without modifying the original array. `splice()` changes the original array by removing or adding elements."
    },
    {
      "question": "What is an `IIFE` (Immediately Invoked Function Expression)?",
      "answer": "An IIFE is a function that is defined and immediately executed. It's often used to create a local scope and avoid polluting the global namespace."
    },
    {
      "question": "What is a `Set` in JavaScript?",
      "answer": "A `Set` is a collection of unique values. It automatically removes duplicate values and provides methods for common set operations like `add()`, `delete()`, and `has()`."
    },
    {
      "question": "What is the `Map` object in JavaScript?",
      "answer": "A `Map` is a collection of key-value pairs where keys can be of any data type. It provides methods such as `set()`, `get()`, and `has()` to manipulate data."
    },
    {
      "question": "What is the purpose of `requestAnimationFrame()`?",
      "answer": "`requestAnimationFrame()` is used to schedule a function to be executed before the next repaint of the browser window, ensuring smoother animations and improving performance."
    },
    {
      "question": "What is destructuring in JavaScript?",
      "answer": "Destructuring is a shorthand syntax for extracting values from arrays or objects and assigning them to variables."
    },
    {
      "question": "What is the `setTimeout` function?",
      "answer": "`setTimeout` is used to delay the execution of a function by a specified number of milliseconds."
    },
    {
      "question": "What are `Map` and `WeakMap` in JavaScript?",
      "answer": "`Map` is a collection of key-value pairs where keys can be any data type, while `WeakMap` is similar but keys are weakly held, meaning if there are no other references to the key, it can be garbage collected."
    },
    {
      "question": "What is the purpose of `Object.create()`?",
      "answer": "`Object.create()` creates a new object with a specified prototype object and optional properties."
    },
    {
      "question": "What is `Array.prototype.sort()` and how does it work?",
      "answer": "`Array.prototype.sort()` sorts the elements of an array in place, by default in ascending order, using string comparison unless a comparison function is provided."
    },
    {
      "question": "What is `try...catch` used for in JavaScript?",
      "answer": "`try...catch` is used for error handling. Code that might throw an exception is placed inside the `try` block, and if an error occurs, it is caught in the `catch` block."
    },
    {
      "question": "What is a `Promise` and how do you use it?",
      "answer": "A `Promise` represents the eventual completion or failure of an asynchronous operation. You use `.then()` to handle fulfillment and `.catch()` to handle rejection."
    },
    {
      "question": "What is the `Proxy` object in JavaScript?",
      "answer": "A `Proxy` object is used to define custom behavior for fundamental operations (e.g., property lookup, assignment, etc.) on objects."
    },
    {
      "question": "What is `super()` in JavaScript?",
      "answer": "`super()` is used to call methods on an object's parent class. It allows you to call a parent class constructor or a parent method from a subclass."
    },
    {
      "question": "What is a `generator` function?",
      "answer": "A generator function returns an iterator, which can be paused and resumed using `yield`. It allows for lazy evaluation of sequences of values."
    },
    {
      "question": "What is `async/await` in JavaScript?",
      "answer": "`async/await` is a syntax for working with promises that makes asynchronous code look and behave more like synchronous code."
    },
    {
      "question": "What are `Map` and `WeakMap` in JavaScript?",
      "answer": "`Map` is a collection of key-value pairs where keys can be of any data type, while `WeakMap` is similar but keys are weakly held, meaning if there are no other references to the key, it can be garbage collected."
    },
    {
      "question": "What is the difference between `apply()` and `bind()` in JavaScript?",
      "answer": "`apply()` invokes the function immediately with the given `this` context and arguments as an array, while `bind()` returns a new function that can be invoked later with the specified `this` context and arguments."
    },
    {
      "question": "What is a `Promise.all()`?",
      "answer": "`Promise.all()` takes an array of promises and returns a single promise that resolves when all of the input promises resolve, or rejects if any input promise rejects."
    },
    {
      "question": "What is the difference between `forEach()` and `map()`?",
      "answer": "`forEach()` is used to iterate over an array but doesn't return a new array. `map()` returns a new array with the results of applying a function to each element."
    }
,      {
      "question": "What are the differences between `var`, `let`, and `const` in JavaScript?",
      "answer": "`var` is function-scoped and can be re-declared and updated. `let` is block-scoped and can be updated but not re-declared in the same scope. `const` is block-scoped and cannot be updated or re-declared, making it immutable after assignment."
    },
    {
      "question": "Explain the concept of closures in JavaScript.",
      "answer": "A closure is a function that retains access to its lexical scope, even when the function is executed outside of that scope. This means an inner function can remember and access variables from its outer function even after the outer function has finished executing."
    },
    {
      "question": "What is the difference between `null` and `undefined` in JavaScript?",
      "answer": "`null` is an assigned value representing the intentional absence of any object value. `undefined` means a variable has been declared but has not yet been assigned a value."
    },
    {
      "question": "What is the purpose of the `this` keyword in JavaScript?",
      "answer": "`this` refers to the context in which a function is called. It is a reference to the object from which the function was called, which can vary depending on how the function is invoked."
    },
    {
      "question": "What are JavaScript promises and how do they work?",
      "answer": "A JavaScript Promise is an object representing the eventual completion or failure of an asynchronous operation. Promises have three states: pending, resolved (fulfilled), and rejected. They allow chaining of `.then()` for success and `.catch()` for error handling."
    },
    {
      "question": "What is a callback function in JavaScript?",
      "answer": "A callback function is a function passed as an argument to another function, which is then executed after the completion of the other function's task, often used for handling asynchronous operations."
    },
    {
      "question": "What is event delegation in JavaScript and how does it work?",
      "answer": "Event delegation is a technique in JavaScript where a single event listener is attached to a parent element instead of multiple listeners for each child element. The event is then propagated from the target element to the parent, allowing for efficient event handling."
    },
    {
      "question": "What are JavaScript hoisting and how do they work with variables and functions?",
      "answer": "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the compile phase. `var` declarations are hoisted with their value being `undefined`, while function declarations are hoisted with their full definition."
    },
    {
      "question": "What are the differences between synchronous and asynchronous programming in JavaScript?",
      "answer": "Synchronous programming executes tasks sequentially, one after another. Asynchronous programming allows tasks to be executed in the background, so the code doesn't wait for a task to complete and can move on to other tasks, improving efficiency in handling I/O operations."
    },
    {
      "question": "What is the difference between `==` and `===` in JavaScript?",
      "answer": "`==` compares values for equality with type coercion, meaning it converts operands to the same type before comparison. `===` compares both value and type, ensuring no type conversion occurs."
    },
    {
      "question": "What is the concept of prototypal inheritance in JavaScript?",
      "answer": "Prototypal inheritance is a feature where objects can inherit properties and methods from other objects. Every JavaScript object has an internal property called `[[Prototype]]` which points to its prototype, from which it inherits methods and properties."
    },
    {
      "question": "Explain the role of the JavaScript event loop.",
      "answer": "The event loop is responsible for executing code, handling events, and executing queued sub-tasks in JavaScript. It continuously checks the message queue and pushes tasks to the call stack for execution if the stack is empty."
    },
    {
      "question": "What is the `call`, `apply`, and `bind` methods in JavaScript?",
      "answer": "`call()` and `apply()` are used to invoke a function with a specified `this` value and arguments. `call()` passes arguments individually, while `apply()` passes them as an array. `bind()` returns a new function that, when called, has its `this` set to the provided value."
    },
    {
      "question": "What are the different types of errors in JavaScript?",
      "answer": "Common error types in JavaScript include `SyntaxError` (invalid code structure), `ReferenceError` (referencing undefined variables), `TypeError` (performing an invalid operation on a data type), `RangeError`, and `URIError`."
    },
    {
      "question": "What is the purpose of the `JSON.stringify()` and `JSON.parse()` methods?",
      "answer": "`JSON.stringify()` converts a JavaScript object to a JSON string, suitable for storage or transmission. `JSON.parse()` takes a JSON string and converts it back into a JavaScript object."
    },
    {
      "question": "What is the difference between `localStorage`, `sessionStorage`, and `cookies`?",
      "answer": "`localStorage` stores data persistently in the browser, even after the browser is closed. `sessionStorage` stores data for the duration of the page session. `cookies` are small pieces of data sent between the server and browser, often used for storing session information, with expiration times."
    },
    {
      "question": "What is the use of `setTimeout` and `setInterval` functions?",
      "answer": "`setTimeout()` executes a function after a specified delay, while `setInterval()` executes a function repeatedly with a specified interval between calls."
    },
    {
      "question": "What is the difference between `for...in` and `for...of` loops?",
      "answer": "`for...in` iterates over the enumerable properties of an object, while `for...of` iterates over the values in an iterable (e.g., array, string)."
    },
    {
      "question": "What are modules in JavaScript and how are they used?",
      "answer": "Modules allow JavaScript code to be split into smaller, reusable pieces. They can be imported and exported using `import` and `export` statements, helping to organize and manage complex codebases."
    },
    {
      "question": "What is the purpose of `try...catch` in JavaScript?",
      "answer": "`try...catch` is used for exception handling. Code that might throw an error is wrapped in the `try` block, and if an error occurs, it is caught in the `catch` block for handling."
    },
    {
      "question": "What is the difference between `map()`, `filter()`, and `reduce()` functions in JavaScript?",
      "answer": "`map()` creates a new array by applying a function to each element of the original array. `filter()` creates a new array with elements that satisfy a condition. `reduce()` reduces the array to a single value based on the accumulator function."
    }
  ];
  