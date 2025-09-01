const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {

  it('should return 7 when type=SUM, a=2.3, b=4.7', function () {
    assert.strictEqual(calculateNumber('SUM', 2.3, 4.7), 7);
  });
  it('should return -7 when type=SUM, a=-2.7, b=-4.3', function () {
    assert.strictEqual(calculateNumber('SUM', -2.7, -4.3), -7);
  });

  it('should return 7 when type=SUBTRACT, a=14.7, b=8.4', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 14.7, 8.4), 7);
  });
  it('should return -7 when type=SUBTRACT, a=-14.7, b=-8.4', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -14.7, -8.4), -7);
  });

  it('should return 0.7 when type=DIVIDE, a=21.4, b=29.9', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 21.4, 29.9), 0.7);
  });
  it('should return -0.7 when type=DIVIDE, a=-21.4, b=29.9', function () {
    assert.strictEqual(calculateNumber('DIVIDE', -21.4, 29.9), -0.7);
  });
  it('should return 0.7 when type=DIVIDE, a=-21.4, b=-29.9', function () {
    assert.strictEqual(calculateNumber('DIVIDE', -21.4, -29.9), 0.7);
  });
  it('should return Error when type=DIVIDE, a=21.4, b=4.5', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 21.4, 0), Error);
  });
});
