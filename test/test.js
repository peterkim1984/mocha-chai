var chai  = require('chai'),
  assert  = chai.assert,
  expect  = chai.expect,
  should  = chai.should();

var functions = require('../app.js');

describe ('Math sequence', function() {
  var result;

  it("should add numbers properly", function() {
      result = functions.add(2, 3);
      expect(result).to.equal(5);
    });

    it("should subtract numbers properly", function() {
      result = functions.subtract(5, 1);
      expect(result).to.equal(4);
    });

    it("should multiply numbers properly", function() {
      result = functions.multiply(4, 6);
      expect(result).to.equal(24);
    });

    it("should divide numbers properly", function() {
      result = functions.divide(30, 10);
      expect(result).to.equal(3);
    });

})