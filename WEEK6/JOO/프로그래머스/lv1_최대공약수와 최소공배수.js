function greatestCommonDivisor(a, b) {
  return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);
}

function leastCommonMultipleOfTwo(a, b) {
  return (a * b) / greatestCommonDivisor(a, b);
}
function gcdlcm(a, b) {
  return [greatestCommonDivisor(a, b), leastCommonMultipleOfTwo(a, b)];
}

gcdlcm(2, 5);
