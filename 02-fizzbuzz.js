'use strict';
for (var i = 1; i <= 100; i++) {
    var f = i % 3 === 0,
        b = i % 5 === 0,
        word = (f && b) ? 'FizzBuzz' : (f) ? 'Fizz' : (b) ? 'Buzz': i;
    console.log(word);
}
