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

describe('Available payments endpoint', () => {
  it('Correct status code and JSON structure', (done) => {
    request('http://localhost:7865/available_payments', (error, result, body) => {
      expect(result.statusCode).to.equal(200);
      const data = JSON.parse(body);
      expect(data).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Login endpoint', () => {
  it('Correct response with userName', (done) => {
    request.post(
      {
        url: 'http://localhost:7865/login',
        json: { userName: 'Betty' }
      },
      (error, result, body) => {
        expect(result.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      }
    );
  });

  it('Should return 400 if userName is missing', (done) => {
    request.post(
      {
        url: 'http://localhost:7865/login',
        json: {}
      },
      (error, result, body) => {
        expect(result.statusCode).to.equal(400);
        expect(body).to.equal('Missing userName');
        done();
      }
    );
  });
});
