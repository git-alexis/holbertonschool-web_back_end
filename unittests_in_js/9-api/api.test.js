const request = require('request');
const { expect } = require('chai');

describe('Index page', function () {
  const url = 'http://localhost:7865/';

  it('Correct status code?', function (done) {
    request.get(url, (error, result, body) => {
      expect(result.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', function (done) {
    request.get(url, (error, result, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Other?', function (done) {
    request.get(url, (error, result, body) => {
      expect(result.headers['content-type']).to.include('text/html');
      done();
    });
  });
});

describe('Cart page', () => {
  it('Correct status code when :id is a number', (done) => {
    request('http://localhost:7865/cart/14', (error, result, body) => {
      expect(result.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result when :id is a number', (done) => {
    request('http://localhost:7865/cart/14', (error, result, body) => {
      expect(body).to.equal('Payment methods for cart 14');
      done();
    });
  });

  it('Correct status code when :id is NOT a number', (done) => {
    request('http://localhost:7865/cart/sept', (error, result, body) => {
      expect(result.statusCode).to.equal(404);
      done();
    });
  });
});
