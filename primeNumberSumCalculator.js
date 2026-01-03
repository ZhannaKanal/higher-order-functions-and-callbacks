const sumPrimes = (number) => {
  const isPrime = (number) => {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  };
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
};
console.log(sumPrimes(10));
