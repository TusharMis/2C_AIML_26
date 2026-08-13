let str = "  Hello JavaScript World  ";

// 1. trim() → removes extra spaces
let clean = str.trim();

// 2. toUpperCase()
console.log(clean.toUpperCase());
// HELLO JAVASCRIPT WORLD

// 3. toLowerCase()
console.log(clean.toLowerCase());
// hello javascript world

// 4. includes() → checks if text exists
console.log(clean.includes("JavaScript"));
// true

// 5. startsWith()
console.log(clean.startsWith("Hello"));
// true

// 6. endsWith()
console.log(clean.endsWith("World"));
// true

// 7. indexOf() → position of text
console.log(clean.indexOf("JavaScript"));
// 6

// 8. slice() → extracts part of string
console.log(clean.slice(0, 5));
// Hello

// 9. replace()
console.log(clean.replace("World", "Developer"));
// Hello JavaScript Developer

// 10. split() → converts string into array
let words = clean.split(" ");
console.log(words);
// ["Hello", "JavaScript", "World"]

// 11. length → number of characters
console.log(clean.length);

// 12. charAt() → character at given index
console.log(clean.charAt(1));
// e

// 13. concat()
let result = "Hello".concat(" ", "Tushar");
console.log(result);
// Hello Tushar