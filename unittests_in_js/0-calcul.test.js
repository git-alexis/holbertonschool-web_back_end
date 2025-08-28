const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {

  it('should return 7 when a=2, b=5', function () {
    assert.strictEqual(calculateNumber(2, 5), 7);
  });
  it('should return 7 when a=2, b=4.5', function () {
    assert.strictEqual(calculateNumber(2, 4.5), 7);
  });
  it('should return 7 when a=1.2, b=5.7', function () {
    assert.strictEqual(calculateNumber(1.2, 5.7), 7);
  });
  it('should return 7 when a=1.8, b=4.5', function () {
    assert.strictEqual(calculateNumber(1.8, 4.5), 7);
  });

  it('should return 7 when a=12, b=-5', function () {
    assert.strictEqual(calculateNumber(12, -5), 7);
  });
  it('should return -7 when a=2, b=-9', function () {
    assert.strictEqual(calculateNumber(2, -9), -7);
  });
  it('should return 7 when a=10.6, b=-4', function () {
    assert.strictEqual(calculateNumber(10.6, -4), 7);
  });
  it('should return -7 when a=2, b=-8.6', function () {
    assert.strictEqual(calculateNumber(2, -8.6), -7);
  });

  it('should return 7 when a=-2.9, b=9.5', function () {
    assert.strictEqual(calculateNumber(-2.9, 9.5), 7);
  });
  it('should return -7 when a=-11.4, b=4.3', function () {
    assert.strictEqual(calculateNumber(-11.4, 4.3), -7);
  });

  it('should return -7 when a=-2, b=-5', function () {
    assert.strictEqual(calculateNumber(-2, -5), -7);
  });
  it('should return -7 when a=-3, b=-4.5', function () {
    assert.strictEqual(calculateNumber(-3, -4.5), -7);
  });
  it('should return -7 when a=-1.2, b=-5.7', function () {
    assert.strictEqual(calculateNumber(-1.2, -5.7), -7);
  });
  it('should return -7 when a=-2.9, b=-4.5', function () {
    assert.strictEqual(calculateNumber(-2.9, -4.5), -7);
  });
});
