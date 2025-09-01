const { expect } = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log "The total is: 120" and call console.log once', function () {
    sendPaymentRequestToApi(100, 20);

    const messages = consoleSpy.getCalls().map(c => c.args[0]);
    expect(messages).to.include('The total is: 120');
    expect(consoleSpy.callCount).to.equal(1);
  });

  it('should log "The total is: 20" and call console.log once', function () {
    sendPaymentRequestToApi(10, 10);

    const messages = consoleSpy.getCalls().map(c => c.args[0]);
    expect(messages).to.include('The total is: 20');
    expect(consoleSpy.callCount).to.equal(1);
  });
});
