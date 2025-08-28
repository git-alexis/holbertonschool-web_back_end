/**
 * calculateNumber - round a and b and return the calcul of it
 * Accepts two numbers a and b
 * Returns the calcul result after rounding them
 */

function calculateNumber(a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);
  return roundedA + roundedB;
}

module.exports = calculateNumber;
