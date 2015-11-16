/* globals describe, it */

var arrayThese = require('../arrayify');
var assert = require('assert');

describe('arrayify', function() {
  var testObj = {
    arrKey: [
      { arrKey1: "someValue" },
      { arrKey2: "someValue" }
    ],
    objKey: {
      objKey1: 'objKeyValue',
      objKey2: 'objKeyValue',
      objKey3: 'objKeyValue'
    },
    someKey: 'value'
  };

  it('should properly array list of keys', function(done) {
    var convertedObj = arrayThese(testObj, [ 'objKey1', 'someKey' ]);

    assert(Array.isArray(convertedObj.someKey));
    assert(Array.isArray(convertedObj.objKey.objKey1));

    done();
  });

  it('should default array list to empty array if excluded', function(done) {
    var convertedObj = arrayThese(testObj);
    assert.deepEqual(convertedObj, testObj);
    done();
  });

  it('should return value if primitive', function(done) {
    assert.equal("aString", arrayThese("aString"));
    assert.equal(500,       arrayThese(500));
    assert.equal(true,      arrayThese(true));
    done();
  });

  it("shouldn't touch keys that are already arrays", function(done) {
    var convertedObj = arrayThese(testObj, ['arrKey']);
    assert.deepEqual(testObj.arrKey, convertedObj.arrKey);
    done();
  });

  it("should be able to hit nested keys", function(done) {
    var convertedObj = arrayThese(testObj, ['arrKey', 'arrKey1']);

    assert(Array.isArray( convertedObj.arrKey ));
    assert(Array.isArray( convertedObj.arrKey[0].arrKey1 ));

    done();
  });

});