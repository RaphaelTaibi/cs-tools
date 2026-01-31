// Example: Using cs-tools utility functions

import {
  capitalize,
  toKebabCase,
  toCamelCase,
  truncate,
  unique,
  chunk,
  shuffle,
  groupBy,
  deepClone,
  pick,
  omit,
  isEmpty,
} from '../src';

// String utilities examples
console.log('=== String Utilities ===');
console.log(capitalize('hello world')); // 'Hello world'
console.log(toKebabCase('HelloWorld')); // 'hello-world'
console.log(toKebabCase('hello_world')); // 'hello-world'
console.log(toCamelCase('hello-world')); // 'helloWorld'
console.log(toCamelCase('hello_world')); // 'helloWorld'
console.log(truncate('This is a very long text', 15)); // 'This is a ve...'
console.log(truncate('Short', 10)); // 'Short'

// Array utilities examples
console.log('\n=== Array Utilities ===');
console.log(unique([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
console.log(unique(['a', 'b', 'a', 'c'])); // ['a', 'b', 'c']
console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3)); // [[1, 2, 3], [4, 5, 6], [7]]
console.log(shuffle([1, 2, 3, 4, 5])); // Random order

const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' },
  { name: 'Dave', role: 'user' },
];
console.log(groupBy(users, (u) => u.role));
// { admin: [{ name: 'Alice', ... }, { name: 'Charlie', ... }], user: [...] }

// Object utilities examples
console.log('\n=== Object Utilities ===');
const original = {
  name: 'John',
  age: 30,
  address: { city: 'New York', zip: '10001' },
};

const cloned = deepClone(original);
cloned.address.city = 'Los Angeles';
console.log('Original:', original.address.city); // 'New York'
console.log('Cloned:', cloned.address.city); // 'Los Angeles'

const user = {
  name: 'Jane',
  age: 25,
  email: 'jane@example.com',
  password: 'secret',
};

console.log(pick(user, ['name', 'email'])); // { name: 'Jane', email: 'jane@example.com' }
console.log(omit(user, ['password'])); // { name: 'Jane', age: 25, email: 'jane@example.com' }
console.log(isEmpty({})); // true
console.log(isEmpty({ name: 'John' })); // false
