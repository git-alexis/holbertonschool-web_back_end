/**
 * calculateNumber - round a and b and return the sum of it
 *
 * @param {number} a - The first number to round.
 * @param {number} b - The second number to round.
 * @returns {number} The sum of the two rounded numbers.
 */

function calculateNumber(a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);
  return roundedA + roundedB;
}

module.exports = calculateNumber;
