var fb = require('..');
var assert = require('assert');

suite('jk-fizzbuzz', function () {

    test("fizzbuzz invalid parameters", function() {
        assert.throws(() => { fb.fizzbuzz(0, 100); });
    });
    test("fizzbuzz invalid parameters", function() {
        assert.throws(() => { fb.fizzbuzz(50, 49); });
    });
    test("fizzbuzz(1, 15)", function() {
        var output = "";
        fb.fizzbuzz(1,15,(out) => { output = output + out + '\n'});
        assert.equal("1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizz\nBuzz\n", output);
    });
});
