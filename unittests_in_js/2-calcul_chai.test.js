const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function () {

  it('should return 7 when type=SUM, a=2.3, b=4.7', function () {
    expect(calculateNumber('SUM', 2.3, 4.7)).to.equal(7);
  });
  it('should return -7 when type=SUM, a=-2.7, b=-4.3', function () {
    expect(calculateNumber('SUM', -2.7, -4.3)).to.equal(-7);
  });

  it('should return 7 when type=SUBTRACT, a=14.7, b=8.4', function () {
    expect(calculateNumber('SUBTRACT', 14.7, 8.4)).to.equal(7);
  });
  it('should return -7 when type=SUBTRACT, a=-14.7, b=-8.4', function () {
    expect(calculateNumber('SUBTRACT', -14.7, -8.4)).to.equal(-7);
  });

  it('should return 0.7 when type=DIVIDE, a=21.4, b=29.9', function () {
    expect(calculateNumber('DIVIDE', 21.4, 29.9)).to.equal(0.7);
  });
  it('should return -0.7 when type=DIVIDE, a=-21.4, b=29.9', function () {
    expect(calculateNumber('DIVIDE', -21.4, 29.9)).to.equal(-0.7);
  });
  it('should return 0.7 when type=DIVIDE, a=-21.4, b=-29.9', function () {
    expect(calculateNumber('DIVIDE', -21.4, -29.9)).to.equal(0.7);
  });
  it('should return Error when type=DIVIDE, a=21.4, b=0', function () {
    expect(calculateNumber('DIVIDE', 21.4, 0)).to.equal("Error");
  });
});
