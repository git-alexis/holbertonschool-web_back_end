/**
 * calculateNumber - round a and b and return the calcul of it
 *
 * @param {string} type - The type of operation to do.
 * @param {number} a - The first number to round.
 * @param {number} b - The second number to round.
 * @returns {number} The calcul result or Error if type = DIVIDE and b = 0.
 */

function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  if (type == "SUM")
    return roundedA + roundedB;
  else if (type == "SUBTRACT")
    return roundedA - roundedB;
  else if (type == "DIVIDE")
    if (roundedB == 0)
      return "Error";
    else
      return roundedA / roundedB;
}

module.exports = calculateNumber;
