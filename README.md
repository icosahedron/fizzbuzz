# FizzBuzz for Demonstration Purposes

Fizzbuzz by itself is pretty useless.

This is a node.js nodule and requires node.js 6.9.1 or greater,
along with npm to be installed.

It takes the start and end of a range of numbers and outputs
a list of items based iterating the range:

* If a number is a multiple of 3, it prints Fizz
* If a number is a multiple of 5, it prints Buzz
* If a number is neither, then it prints the number
* As a special case, if a number is both a multiple
  of 3 and 5, it prints Fizz\nBuzz.  No special logic
  for this, but it occurs so don't be surprised.

## API

To use the supremely useful Fizzbuzz API, reqire the library
and use the fizzbuzz API as follows:

```
var fb = require('jk-fizzbuzz');

fb.fizzbuzz(1, 100);
```

By default, output goes to the console.  To have output go
to another location, use the last parameter, a function that
takes the output.

```
var fb = require('jk-fizzbuzz');

var output = "";
fb.fizzbuzz(1,15,(out) => { output = output + out + '\n'});
```

## Installation

To install fizzbuzz, clone the directory and run `npm install`.
This will download the test framework `mocha`.

### npm

I thought about putting fizzbuzz on npm, but really, why?

## Tests

To run the tests, use `npm test`.
