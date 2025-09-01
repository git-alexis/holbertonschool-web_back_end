/**
 * getPaymentTokenFromAPI - return a resolved promise with an object when success is true
 *
 * @param {boolean} success - The condition for the promise.
 * @returns {Promise} The resolved promise with the object or nothing.
 */

function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
}

module.exports = getPaymentTokenFromAPI;
