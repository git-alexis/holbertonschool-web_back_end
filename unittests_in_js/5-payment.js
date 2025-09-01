const Utils = require('./utils.js');

/**
 * sendPaymentRequestToApi - display in the console the message The total is: <result of the sum>
 *
 * @param {number} totalAmount - The first number to round.
 * @param {number} totalShipping - The second number to round.
 */

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log("The total is: " + result);
}

module.exports = sendPaymentRequestToApi;
