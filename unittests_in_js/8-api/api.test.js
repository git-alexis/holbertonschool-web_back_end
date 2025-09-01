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
