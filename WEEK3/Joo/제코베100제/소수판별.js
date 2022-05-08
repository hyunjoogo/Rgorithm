const n = "6";

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  if (n <= 1) {
    return false;
  }
  return true;
}

console.log(isPrime(n) ? "YES" : "NO");
