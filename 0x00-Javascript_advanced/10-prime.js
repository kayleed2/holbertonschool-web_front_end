function countPrimeNumbers() {
    let primes = [];
    for (let i = 2; i <= 100; i++) {
        let flag = 1;
        for (let n = 2; n < i; n++) {
            if (i % n === 0) {
                flag = 0;
            }
        }
        if (flag === 1) {
            primes.push(i);
        }
    }
    return primes;
}
const t0 = performance.now();
for (let i = 0; i <= 100; i++) {
    countPrimeNumbers();
}
const t1 = performance.now();
console.log(`Execution time of calculating countPrimeNumbers 100 times was ${t1 - t0} milliseconds.`);
