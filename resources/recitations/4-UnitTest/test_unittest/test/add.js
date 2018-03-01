var assert = require('chai').assert;
var add = require('../add.js').add;

describe('Test category 1', function () {
    var foo = false;

    beforeEach(function (done) {

        setTimeout(function () {

            foo = true;
            done();
        }, 50);
    });

    it('foo is true', function () {

        assert.isTrue(foo);
    });

//    it('adds two numbers', function () {

  //      assert.equal(add(1, 1), 2);
   // });
});
