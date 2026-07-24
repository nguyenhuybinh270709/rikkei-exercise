const n = parseInt(prompt("Nhập một số nguyên bất kỳ:"));
let isPrime = true;

if (n <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log("Là số nguyên tố");
} else {
  console.log("Không phải số nguyên tố");
}
