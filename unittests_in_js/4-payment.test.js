const { expect } = require('chai');
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber once with type=SUM, a=100, b=20 and log The total is: 10', function () {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;

    const messages = consoleSpy.getCalls().map(call => call.args[0]);
    expect(messages).to.include('The total is: 10');

    stub.restore();
    consoleSpy.restore();
  });
});
